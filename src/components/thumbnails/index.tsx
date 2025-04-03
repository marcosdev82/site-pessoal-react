import { Image } from "./styles";
import { ThumbnailData } from '../../types/posts';

const Thumbnail = (prop: ThumbnailData) => {

  const { url, alt, width, height } = prop

  return (
    <Image src={url} alt={alt} width={width} height={height} />
  );
};

export default Thumbnail;
