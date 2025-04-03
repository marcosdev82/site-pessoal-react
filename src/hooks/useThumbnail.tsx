import { useMemo } from "react";

interface ImageSize {
  source_url: string;
  width: number;
  height: number;
  file?: string;
  'mime-type'?: string;
  filesize?: number;
}

interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: {
    medium?: ImageSize;
    large?: ImageSize;
    thumbnail?: ImageSize;
    medium_large?: ImageSize;
    '1536x1536'?: ImageSize;
    [key: string]: ImageSize | undefined;
  };
  source_url?: string;
}

interface ThumbnailData {
  url: string;
  width: number;
  height: number;
}

type ThumbnailSize = 'medium' | 'large' | 'thumbnail' | 'medium_large' | 'full' | '1536x1536';

const useThumbnail = (
  media_details: MediaDetails | null | undefined | unknown,
  size: ThumbnailSize = 'medium'
): ThumbnailData | null => {
  return useMemo(() => {
    // Verificação de tipo segura
    if (!media_details || typeof media_details !== 'object') {
      return null;
    }

    const media = media_details as MediaDetails;

    // Caso especial para tamanho 'full'
    if (size === 'full') {
      return media.source_url ? {
        url: media.source_url,
        width: media.width,
        height: media.height
      } : null;
    }

    // Verifica se o tamanho solicitado existe
    if (!media.sizes || !media.sizes[size]) {
      return null;
    }

    const sizeData = media.sizes[size];
    if (!sizeData) return null;

    return {
      url: sizeData.source_url,
      width: sizeData.width,
      height: sizeData.height
    };
  }, [media_details, size]);
};

export default useThumbnail;