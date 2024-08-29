// import PropTypes from "prop-types";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <div className={styles.error}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
