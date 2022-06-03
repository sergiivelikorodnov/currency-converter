import React from "react";
import { endpointPath } from "../../config/api";
import useFetch from "../../hooks/useFetch";
import styles from "./CurrentCurrency.module.scss";

type CurrentCurrencyProps = {
  rates: string[];
};

function CurrentCurrency({ rates }: CurrentCurrencyProps): JSX.Element {
  return (
    <ul className={styles.cList}>
      {rates.map((rate) => {
        const { data } = useFetch(endpointPath(rate, "UAH", "1"));
        return (
          <li className={styles.cItem} key={rate}>
            <p className={styles.cFrom}>{rate}</p>
            <p className={styles.cTo}>UAH</p>
            <p>{data && parseFloat(data).toFixed(2)}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default CurrentCurrency;
