import React from "react";

import "./button.scss";

type ButtonProps = {
  label: string;
  hugContent: boolean;
  isPrimary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Button({
  label,
  hugContent = true,
  isPrimary = true,
  onClick = () => {},
}: ButtonProps) {
  const type = isPrimary ? "primary" : "secondary";
  const width = hugContent ? "button" : "button fill";

  return (
    <button onClick={onClick} className={type}>
      {label}
    </button>
  );
}

export default Button;
