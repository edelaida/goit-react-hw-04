import s from "./ImageGallery.module.css";

const ImageGallery = ({ pictures }) => {
  return (
    <ul className={s.blokapp}>
      {pictures &&
        pictures.length > 0 &&
        pictures.map((picture) => {
          return (
            <li key={picture.id}>
              <img
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
{
  /* <li key={picture.id}>
              <img src={picture.urls.small} alt={picture.alt_description} />
            </li> */
}
