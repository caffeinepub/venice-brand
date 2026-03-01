# VENICE Brand

## Current State

Five-page vintage editorial website (Home, Beauty, Fashion, Talent, Contact). The Contact page lets visitors generate a VENICE email address by choosing a department and entering a name. No user accounts, no login, no inbox. Backend only has a `ping()` stub.

## Requested Changes (Diff)

### Add
- User account system: register with email + password, login, logout
- Personal inbox: logged-in users can see all emails sent to them by other users on the platform
- Send email feature: compose and send a message to another VENICE user by their email address
- Verified badge: `KeegantheCEO@VENICEtalent.com` is the only verified account, shown with a sparkly red checkmark badge next to the email wherever it appears (inbox sender column, profile header)
- Auth pages: Sign Up and Log In accessible from the Navigation bar
- Inbox page: shows received messages (from, subject, body, timestamp); clicking a message opens it

### Modify
- Navigation: add "Sign In" / "My Inbox" links (context-aware based on auth state)
- Backend: replace ping stub with full accounts + messaging API

### Remove
- Nothing removed from existing pages

## Implementation Plan

1. Backend (Motoko):
   - `register(email, password)` → creates account, returns ok/err
   - `login(email, password)` → returns session token or ok/err
   - `logout()` → clears session
   - `getProfile()` → returns current user's email and verified status
   - `sendEmail(toEmail, subject, body)` → stores message for recipient
   - `getInbox()` → returns array of received messages for current user
   - `getMessage(id)` → returns full message
   - Verified flag: hardcode `KeegantheCEO@VENICEtalent.com` as verified

2. Frontend:
   - `SignUpPage`: form with email + password + confirm password
   - `SignInPage`: form with email + password
   - `InboxPage`: list of received messages with sender, subject, timestamp; click to read; compose button to send new email
   - `ComposeModal`: to, subject, body fields
   - Verified badge component: sparkly red animated checkmark shown next to verified email addresses
   - Navigation updated: show "Sign In / Sign Up" when logged out; show "Inbox" + user email + "Sign Out" when logged in
