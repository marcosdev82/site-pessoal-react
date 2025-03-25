import { Image } from "./styles";

interface PropImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Thumbnail = ({ src, alt, width, height }: PropImage) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} />
  );
};

export default Thumbnail;
