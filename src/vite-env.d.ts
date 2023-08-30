/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_AUTH_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMeta;
}
