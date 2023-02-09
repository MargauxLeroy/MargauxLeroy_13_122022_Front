import React from "react";

import "./feature.scss";

export type FeatureProps = {
  title: string;
  description: string;
  icon: string;
};

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="feature-item">
      <img src={icon} alt="Chat Icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Feature;
