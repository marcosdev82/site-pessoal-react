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
  sizes: Record<ThumbnailSize, ImageSize>;
}
export interface ThumbnailData {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export type ThumbnailSize = 'medium' | 'large' | 'thumbnail' | 'medium_large' | 'full';

export interface Category {
  id: number;
  slug: string;
  name: string;
}

// Definições de tipos
export interface AvatarUrls {
  [size: number]: string; // Exemplo: { 24: "url", 48: "url" }
}

export type AvatarSizes = 24 | 48 | 96;

export interface AvatarContent {
  id?: number;
  name?: string;
  slug?: string;
  foto?: string;
  link?: string;
  size?: AvatarSizes;
}

export interface AuthorData {
  id: number;
  name: string;
  email?: string;
  description?: string;
  avatar_urls?: AvatarUrls;
}

export interface PostType {
  id: number;
  title: string;
  content?: string;
  excerpt?: string;
  media_details?: MediaDetails | undefined | null;
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

export interface HeadContent {
  title: string;
  description?: string;
  canonical?: string;
  robot?: string;
  keywords?: string;
  local?: string;
  type?: string;
  siteName?: string;
  publish?: string;
}

export interface EntryTitleProps {
  title?: string;
  icon?: string;
}

export interface BlogContextType {
  posts: PostType[];
  categories: Category[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  itemsPerPage: number;
  isLoading: boolean;
  changePage: (page: number) => void;
  fetchPosts: (page?: number) => Promise<void>;
  getPostById: (id: number) => Promise<PostType | null>; 
}
