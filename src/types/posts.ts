export interface ImageSize {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  filesize: number;
  source_url: string;
}

export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: Record<string, ImageSize>; // Correção: 'sizes' é um objeto indexado
}

export interface Category {
  id: number;
  slug: string;
  name: string;
}

export interface AvatarUrls {
  [size: number]: string; // Exemplo: { 24: "url", 48: "url" }
}

export interface AuthorData {
  id?: number;
  name?: string;
  email?: string;
  description?: string;
  avatar_urls?: AvatarUrls;
}

export interface PostType {
  id: number;
  title: string;
  content?: string;
  excerpt?: string;
  media_details?: MediaDetails;
  date?: string;
  categories_details?: Category[];
  author_data?: AuthorData;
  slug?: string;
}

export interface EntryMetaContent {
  date?: string;
  avatar?: AvatarUrls;
  author?: AuthorData | null; // Correção de AuthorData[] | null para AuthorData | null
  categories_details?: Category[] | null;
}
