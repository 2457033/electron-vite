/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaENV {
  VITE_APP_PUBLIC_BASE: string
  VITE_APP_PORT: string
  VITE_FALLBACK_LOCALE: string
  VITE_BASE_URL: string
  VITE_ENV_FILE: string
}

interface ImportMeta {
  readonly env: ImportMetaENV
}
