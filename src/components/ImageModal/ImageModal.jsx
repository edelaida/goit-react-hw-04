import Modal from "react-modal";
import s from "../ImageGallery/ImageGallery.module.css";

const ImageModal = ({ modalData, onRequestClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <img className={s.bigcard} src={modalData} alt="Picture-description" />
    </Modal>
  );
};

export default ImageModal;
