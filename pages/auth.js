import React from "react";
import AuthModal from "../components/auth/authModal";
import styles from "../styles/Home.module.scss";
const auth = () => {
  return (
    <div className={[styles.container, styles.main].join(" ")}>
      <AuthModal />
    </div>
  );
};

export default auth;
