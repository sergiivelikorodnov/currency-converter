import React from "react";
import { actualRates } from "../../const";
import CurrentCurrency from "../CurrentCurrency/CurrentCurrency";
import styles from "./Header.module.scss";

function Header(): JSX.Element {
  return (
    <header className={styles.hContainer}>
      <h1>Logo</h1>
      <CurrentCurrency rates={actualRates} />
    </header>
  );
}

export default Header;
