import styles from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  const { urls, alt_description } = image;

  return (
    <div className={styles.card}>
      <img src={urls.small} alt={alt_description} className={styles.image} />
    </div>
  );
};

export default ImageCard;
