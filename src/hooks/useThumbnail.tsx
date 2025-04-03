import { useMemo } from "react";
import { MediaDetails, ThumbnailData, ThumbnailSize } from "../types/posts";

const useThumbnail = (
  media_details: MediaDetails | undefined,
  size: ThumbnailSize = 'medium'
): ThumbnailData | null => {
  return useMemo(() => {
    if (!media_details || typeof media_details !== 'object') {
      return null;
    }

    // Verifica se o tamanho solicitado existe
    const sizeData = media_details.sizes?.[size];

    if (!sizeData) return null;

    return {
      url: sizeData.source_url,
      width: sizeData.width,
      height: sizeData.height
    };
  }, [media_details, size]);
};

export default useThumbnail;