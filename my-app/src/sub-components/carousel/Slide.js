import React from "react";

import "./carousel.scss";
import "./carousel-mb.scss";

const Slide = ({ title, textParagraph1, textParagraph2, textStrong, img, alt }) => (
  <div>
    <div className="text-content">
      <h3>{title}</h3>
      <p>{textParagraph1}</p>
      <p>{textParagraph2}</p>
      <p>
        <strong>{textStrong}</strong>
      </p>
    </div>
    <figure>
      <img src={img} alt={alt}/>
    </figure>
  </div>
);

export default Slide;
