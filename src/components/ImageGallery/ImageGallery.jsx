import s from "./ImageGallery.module.css";

const ImageGallery = ({ pictures, openModal }) => {
  return (
    <ul className={s.blokapp}>
      {pictures &&
        pictures.length > 0 &&
        pictures.map((picture) => {
          return (
            <li key={picture.id}>
              <img
                onClick={openModal}
                className={s.card}
                src={picture.urls.small}
                alt={picture.alt_description}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
