import React from "react";
import { language } from "../../const";

type Dropdownsprops = {
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

function Dropdowns({ handleChange, value }: Dropdownsprops): JSX.Element {
  return (
    <>
      <label>
        <select value={value} onChange={(event) => handleChange(event)}>
          {language.map((languages) => (
            <option key={languages.code}>{languages.code}</option>
          ))}
        </select>
      </label>
    </>
  );
}

export default Dropdowns;
