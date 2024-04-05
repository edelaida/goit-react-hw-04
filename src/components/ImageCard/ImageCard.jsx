//import React from "react";
import s from "../ImageGallery/ImageGallery.module.css";

const ImageCard = ({ picture, onClick }) => {
  return (
    <li key={picture.id}>
      <img
        onClick={onClick}
        className={s.card}
        src={picture.urls.small}
        alt={picture.alt_description}
      />
    </li>
  );
};

export default ImageCard;
