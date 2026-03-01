import { useCallback, useEffect, useState } from "react";

export type Message = {
  id: string;
  fromEmail: string;
  toEmail: string;
  subject: string;
  body: string;
  timestamp: number;
  read: boolean;
};

export type StoredUser = {
  email: string;
  password: string;
  inbox: Message[];
  sent: Message[];
};

const USERS_KEY = "venice_users";
const SESSION_KEY = "venice_session";
const VERIFIED_EMAIL = "keegantheceo@venicetalent.com";

function getUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getSession(): string | null {
  return localStorage.getItem(SESSION_KEY);
}

function saveSession(email: string | null): void {
  if (email) {
    localStorage.setItem(SESSION_KEY, email);
  } else {
    localStorage.removeItem(SESSION_KEY);
  }
}

export function isVerifiedEmail(email: string): boolean {
  return email.toLowerCase() === VERIFIED_EMAIL;
}

export function useAuth() {
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(() =>
    getSession(),
  );

  const currentUser: StoredUser | null = (() => {
    if (!currentUserEmail) return null;
    const users = getUsers();
    return (
      users.find(
        (u) => u.email.toLowerCase() === currentUserEmail.toLowerCase(),
      ) ?? null
    );
  })();

  const isLoggedIn = currentUser !== null;

  // Keep session in sync if localStorage changes in another tab
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === SESSION_KEY) {
        setCurrentUserEmail(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const signup = useCallback(
    (email: string, password: string): { success: boolean; error?: string } => {
      const users = getUsers();
      const exists = users.some(
        (u) => u.email.toLowerCase() === email.toLowerCase(),
      );
      if (exists) {
        return {
          success: false,
          error: "An account with this email already exists.",
        };
      }
      const newUser: StoredUser = {
        email,
        password,
        inbox: isVerifiedEmail(email)
          ? [
              {
                id: "seed-1",
                fromEmail: "editorial@VENICEbeauty.com",
                toEmail: email,
                subject: "Welcome to VENICE — Your Verified Account",
                body: "Dear Keegan,\n\nWelcome to VENICE. Your account has been verified and marked as our founding CEO. You are the first verified member of the VENICE family.\n\nWith admiration,\nThe VENICE Editorial Board",
                timestamp: Date.now() - 1000 * 60 * 60 * 2,
                read: false,
              },
              {
                id: "seed-2",
                fromEmail: "talent@VENICEtalent.com",
                toEmail: email,
                subject: "VENICE Talent Roster — Spring Season",
                body: "Dear Keegan,\n\nThe spring talent roster is ready for your review. We have fifteen exceptional candidates for the upcoming editorial shoots.\n\nRegards,\nVENICE Talent Division",
                timestamp: Date.now() - 1000 * 60 * 30,
                read: false,
              },
            ]
          : [],
        sent: [],
      };
      users.push(newUser);
      saveUsers(users);
      saveSession(email);
      setCurrentUserEmail(email);
      return { success: true };
    },
    [],
  );

  const login = useCallback(
    (email: string, password: string): { success: boolean; error?: string } => {
      const users = getUsers();
      const user = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase(),
      );
      if (!user) {
        return {
          success: false,
          error: "No account found with this email address.",
        };
      }
      if (user.password !== password) {
        return {
          success: false,
          error: "Incorrect password. Please try again.",
        };
      }
      saveSession(user.email);
      setCurrentUserEmail(user.email);
      return { success: true };
    },
    [],
  );

  const logout = useCallback(() => {
    saveSession(null);
    setCurrentUserEmail(null);
  }, []);

  const isVerified = useCallback((email: string): boolean => {
    return isVerifiedEmail(email);
  }, []);

  const sendMessage = useCallback(
    (
      toEmail: string,
      subject: string,
      body: string,
    ): { success: boolean; error?: string } => {
      if (!currentUserEmail) {
        return {
          success: false,
          error: "You must be signed in to send messages.",
        };
      }
      const users = getUsers();
      const recipientIdx = users.findIndex(
        (u) => u.email.toLowerCase() === toEmail.toLowerCase(),
      );
      if (recipientIdx === -1) {
        return {
          success: false,
          error: "No VENICE account found with that email address.",
        };
      }
      const senderIdx = users.findIndex(
        (u) => u.email.toLowerCase() === currentUserEmail.toLowerCase(),
      );

      const msg: Message = {
        id: `msg-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        fromEmail: currentUserEmail,
        toEmail,
        subject,
        body,
        timestamp: Date.now(),
        read: false,
      };

      // Deliver to recipient inbox
      users[recipientIdx].inbox.push(msg);

      // Save in sender's sent box
      if (senderIdx !== -1) {
        users[senderIdx].sent.push({ ...msg, read: true });
      }

      saveUsers(users);
      return { success: true };
    },
    [currentUserEmail],
  );

  const markRead = useCallback(
    (messageId: string): void => {
      if (!currentUserEmail) return;
      const users = getUsers();
      const userIdx = users.findIndex(
        (u) => u.email.toLowerCase() === currentUserEmail.toLowerCase(),
      );
      if (userIdx === -1) return;
      const msgIdx = users[userIdx].inbox.findIndex((m) => m.id === messageId);
      if (msgIdx === -1) return;
      users[userIdx].inbox[msgIdx].read = true;
      saveUsers(users);
      // Force re-render by updating state ref
      setCurrentUserEmail((prev) => prev);
    },
    [currentUserEmail],
  );

  // Refresh inbox from storage (returns latest data)
  const refreshInbox = useCallback((): Message[] => {
    if (!currentUserEmail) return [];
    const users = getUsers();
    const user = users.find(
      (u) => u.email.toLowerCase() === currentUserEmail.toLowerCase(),
    );
    return user?.inbox ?? [];
  }, [currentUserEmail]);

  const refreshSent = useCallback((): Message[] => {
    if (!currentUserEmail) return [];
    const users = getUsers();
    const user = users.find(
      (u) => u.email.toLowerCase() === currentUserEmail.toLowerCase(),
    );
    return user?.sent ?? [];
  }, [currentUserEmail]);

  return {
    currentUser,
    currentUserEmail,
    isLoggedIn,
    isVerified,
    login,
    logout,
    signup,
    sendMessage,
    markRead,
    refreshInbox,
    refreshSent,
  };
}
