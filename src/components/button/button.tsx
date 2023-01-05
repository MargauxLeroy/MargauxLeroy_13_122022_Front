import React from "react";

import "./button.scss";

type ButtonProps = {
  label: string;
  hugContent: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Button({ label, hugContent = true, onClick = () => {} }: ButtonProps) {
  return (
    <button onClick={onClick} className={hugContent ? "button" : "button fill"}>
      {label}
    </button>
  );
}

export default Button;
