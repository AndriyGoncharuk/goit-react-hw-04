import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.content}>
        <img
          src={urls.regular}
          alt={alt_description}
          className={styles.image}
        />
        <p>Author: {user.name}</p>
        <p>Likes: {likes}</p>
        <button onClick={onRequestClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
