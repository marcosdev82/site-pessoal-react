interface ImportMetaEnv {
    readonly VITE_API: string;
    // você pode adicionar mais variáveis aqui, se precisar
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
