import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import React from "react";
import styles from "./PageWrapper.module.scss";

function PageWrapper(): JSX.Element {
  return (
    <div className={styles.pWrapper}>
      <Header />
      <Outlet />
    </div>
  );
}

export default PageWrapper;
