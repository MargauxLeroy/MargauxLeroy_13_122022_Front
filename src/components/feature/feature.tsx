import React from "react";

import "./feature.scss";

import IconChat from "../../assets/icons/icon-chat.png";

export type FeatureProps = {
  title: string;
  description: string;
  icon: string;
};

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="feature-item">
      <img src={IconChat} alt="Chat Icon" />

      {/* <img src={icon} alt="Chat Icon" /> */}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Feature;
