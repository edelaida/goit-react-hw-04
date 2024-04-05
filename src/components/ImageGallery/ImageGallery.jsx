import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import ImageModal from "../ImageModal/ImageModal";

const ImageGallery = ({ pictures, onImageClick }) => {
  return (
    <ul className={s.blokapp}>
      {pictures &&
        pictures.length > 0 &&
        pictures.map((picture) => {
          return (
            <ImageCard
              key={picture.id}
              picture={picture}
              onClick={() => onImageClick(picture)}
            />
          );
        })}
      <ImageModal />
    </ul>
  );
};

export default ImageGallery;
// change
