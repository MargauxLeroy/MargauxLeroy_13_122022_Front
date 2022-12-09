import React from "react";
import { Link } from "react-router-dom";

import "./button.scss";

type ButtonProps = {
  label: string;
  hugContent: boolean;
};

function Button({ label, hugContent = true }: ButtonProps) {
  return (
    <Link to="/user">
      <button className={hugContent ? "button" : "button fill"}>{label}</button>
    </Link>
  );
}

export default Button;
