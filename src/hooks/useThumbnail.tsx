import { useMemo } from "react";

interface ImageSize {
  source_url: string;
  width: number;
  height: number;
}

interface MediaDetails {
  sizes: {
    [key: string]: ImageSize;
  };
}

interface EmbeddedMedia {
  media_details?: MediaDetails;
  alt_text?: string;
}

const useThumbnail = (_embedded: { [key: string]: any } | undefined, size: string) => {
  const thumbnail = useMemo(() => {
    const media = _embedded?.["wp:featuredmedia"]?.[0] as EmbeddedMedia | undefined;
    
    if (!media?.media_details?.sizes || !media.media_details.sizes[size]) {
      return null; 
    }

    const { source_url, width, height } = media.media_details.sizes[size];

    return {
      url: source_url,
      width,
      height,
      alt: media.alt_text || "Imagem sem descrição",
    };
  }, [_embedded, size]);

  return thumbnail;
};

export default useThumbnail;
