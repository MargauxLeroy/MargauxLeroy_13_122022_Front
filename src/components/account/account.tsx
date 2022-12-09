import React from "react";
import Button from "../button/button";

import "./account.scss";

export type AccountProps = {
  title: string;
  amount: string;
  description: string;
};

function Account({ title, amount, description }: AccountProps) {
  return (
    <section className="account">
      <div className="content-wrapper">
        <h3>{title}</h3>
        <p className="amount">${amount}</p>
        <p className="description">{description}</p>
      </div>
      <Button label={"View transactions"} hugContent={true}></Button>
    </section>
  );
}

export default Account;
