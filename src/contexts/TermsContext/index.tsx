import { createContext, ReactNode, use } from "react";
import { TermsContent, TermsContextType } from "./types";

const API_URL = `${import.meta.env.VITE_API}/categories`;

export const TermsContext = createContext<TermsContextType | null>(null);

const categoriesResource = fetch(API_URL).then((res) => res.json());

export function TermsProvider({ children }: { children: ReactNode }) {

    const categories = use(categoriesResource) as TermsContent[];

    return (
        <TermsContext.Provider value={{ categories }}>
            {children}
        </TermsContext.Provider>
    );
}
