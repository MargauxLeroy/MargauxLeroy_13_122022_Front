import React from "react";
import { Link } from "react-router-dom";

import "./button.scss";

type ButtonProps = {
  label: string;
  hugContent: boolean;
  onClick?: () => void;
};

function Button({ label, hugContent = true, onClick = () => {} }: ButtonProps) {
  return (
    <Link to="/user">
      <button 
      onClick= {onClick}
      className={hugContent ? "button" : "button fill"}>{label}</button>
    </Link>
  );
}

export default Button;
