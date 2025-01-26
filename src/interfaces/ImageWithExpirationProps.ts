import ImageData from "./ImageData";
interface ImageWithExpirationProps {
  image: ImageData;
  onExpirationChange: (newExpirationTime: string) => void;
}
export default ImageWithExpirationProps;
