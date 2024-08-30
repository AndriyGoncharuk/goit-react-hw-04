import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button type="button" onClick={onClick} className={styles.button}>
    Load more
  </button>
);

export default LoadMoreBtn;
