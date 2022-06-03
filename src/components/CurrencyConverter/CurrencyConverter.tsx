import { useEffect, useRef, useState } from "react";
import React from "react";
import Dropdowns from "../Dropdowns/Dropdowns";
import SwapOutlined from "@ant-design/icons/lib/icons/SwapOutlined";
import styles from "./CurrencyConverter.module.scss";
import useFetch from "../../hooks/useFetch";
import { endpointPath } from "../../config/api";

function CurrencyConverter(): JSX.Element {
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("UAH");
  const { data, loading, error } = useFetch(endpointPath(from, to, amount));
  const resultInput = useRef<HTMLInputElement>(null);

  const handleFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFrom(e.target.value);
  };

  const handleTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTo(e.target.value);
  };

  const handleSwitch = () => {
    const temp = to;
    setTo(from);
    setFrom(temp);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.target.value)) {
      e.preventDefault();
    } else {
      setAmount(e.target.value);
    }
  };

  useEffect(() => {
    if (resultInput && data)
      resultInput.current!.value = parseFloat(data).toFixed(2);
  }, [data]);

  return (
    <div className={styles.cContainer}>
      <h1>Currency Converter</h1>
      <div className={styles.cWidget}>
        <div className={styles.cAmount}>
          <input
            placeholder="Enter Amount"
            value={amount}
            type="number"
            onChange={handleInput}
          />
          <div className="fromdrop">
            <Dropdowns handleChange={handleFrom} value={from}></Dropdowns>
          </div>
        </div>
        <div className={styles.cSwap}>
          <button onClick={handleSwitch}>
            <SwapOutlined />
          </button>
        </div>
        <div className={styles.cAmount}>
          {loading ? (
            <input placeholder="Loading..." type="number" disabled />
          ) : (
            <input ref={resultInput} type="number" disabled />
          )}
          <div>
            <Dropdowns handleChange={handleTo} value={to}></Dropdowns>
          </div>
        </div>
        <div>{error && <h2>{error}</h2>}</div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
