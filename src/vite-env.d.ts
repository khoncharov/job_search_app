/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH_LOGIN: string;
  readonly VITE_AUTH_PASSWORD: string;
  readonly VITE_CLIENT_ID: string;
  readonly VITE_CLIENT_SECRET: string;
  readonly VITE_HR: string;
  readonly VITE_X_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
