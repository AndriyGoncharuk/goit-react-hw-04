// import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

const LoadingSpinner = () => (
  <div className={styles.loader}>
    {/* <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> */}
    <p>loading...</p>
  </div>
);

export default LoadingSpinner;
