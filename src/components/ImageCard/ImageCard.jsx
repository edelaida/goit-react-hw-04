//import React from "react";
import s from "../ImageGallery/ImageGallery.module.css";

const ImageCard = ({ picture }) => {
  return (
    <div>
      <img
        className={s.bigcard}
        src={picture.urls.regular}
        alt={picture.alt_description}
      />
    </div>
  );
};

export default ImageCard;
