import React from "react";
import { capitalizeFirstLetter } from "../../constants/helpers";

import "./input.scss";

type InputProps = {
  label: string;
};

function Input({ label }: InputProps) {
  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{capitalizeFirstLetter(label)}</label>
      <input type="text" id={label} />
    </div>
  );
}

export default Input;
