import PropTypes from "prop-types";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  const { urls, alt_description } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img src={urls.regular} alt={alt_description} className={styles.image} />
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default ImageModal;
