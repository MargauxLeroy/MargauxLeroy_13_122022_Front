import React from "react";
import { capitalizeFirstLetter } from "../../constants/helpers";

import "./input.scss";

type InputProps = {
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

function Input({ label, onChange }: InputProps) {
  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{capitalizeFirstLetter(label)}</label>
      <input type="text" id={label} onChange={onChange} />
    </div>
  );
}

export default Input;
