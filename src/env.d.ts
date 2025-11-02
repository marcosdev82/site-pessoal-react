interface ImportMetaEnv {
    readonly VITE_API: string;
    readonly VITE_SITE: string;
    readonly VITE_SNAP: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
