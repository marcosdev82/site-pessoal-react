import { useMemo } from "react";
import { AvatarUrls, AvatarSizes } from '../types/posts';

const useAvatarUrl = (foto: AvatarUrls | undefined, size: AvatarSizes): string => {
  return useMemo(() => {
    if (!foto) return "";
    return foto[size] || "";
  }, [foto, size]);
};

export default useAvatarUrl;