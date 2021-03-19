import React from 'react';

import './third-section.scss';
import './third-section-mb.scss';

const thirdSection = ({title, title2, subtitle}) => 
  <section className="third-section">
    <div>
      <h3>{subtitle}</h3>
      <h2>{title}</h2>
      <h2>{title2}</h2>
    </div>
  </section>


export default thirdSection;