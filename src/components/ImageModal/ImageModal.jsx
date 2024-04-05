import Modal from "react-modal";
//import ImageGallery from "../ImageGallery/ImageGallery";

const ImageModal = ({ modalData, onRequestClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <img src={modalData} alt="selected" />
    </Modal>
  );
};

export default ImageModal;
