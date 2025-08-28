export interface TermsContent {
    id: number;
    name: string;
    slug: string;
    count: number;
}

export interface TermsContextType {
    categories: TermsContent[];
}
