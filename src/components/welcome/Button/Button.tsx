import React from "react";
import styles from "./Button.scss";

interface Props {
  onClick?: () => void;
}

const LoginButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <button className={styles.btn} onClick={onClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginButton;

