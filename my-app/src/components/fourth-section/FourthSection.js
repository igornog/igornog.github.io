import React from 'react';

import './fourth-section.scss';
import './fourth-section-mb.scss';

const fourthSection = ({title, title2, title3, subtitle}) => 
  <section className="fourth-section">
    <div>
      <h3>{subtitle}</h3>
      <div className="subtitle-border">
        <span></span>
      </div>
      <h2>{title}</h2>
      <h2>{title2}</h2>
      <h2>{title3}</h2>
    </div>
  </section>


export default fourthSection;