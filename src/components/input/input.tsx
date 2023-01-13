import React from "react";
import { capitalizeFirstLetter } from "../../constants/helpers";

import "./input.scss";

type InputProps = {
  label?: string;
  withLabel?: boolean;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

function Input({ label, withLabel = true, placeholder, onChange }: InputProps) {
  return (
    <div className="input-wrapper">
      {withLabel ? (
        <label htmlFor={label}>{capitalizeFirstLetter(label!)}</label>
      ) : (
        <></>
      )}
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
