// Augments backendInterface and Backend class so useActor.ts can call
// _initializeAccessControlWithSecret without type errors.
// The authorization component adds this method to the backend at build time.
declare module "./backend" {
  interface backendInterface {
    _initializeAccessControlWithSecret(secret: string): Promise<void>;
  }
  // Extend the Backend class instance type via interface merging
  interface Backend {
    _initializeAccessControlWithSecret(secret: string): Promise<void>;
  }
}

export {};
