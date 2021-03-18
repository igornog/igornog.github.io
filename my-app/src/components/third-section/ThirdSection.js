import React from 'react';

import './third-section.scss';
import './third-section-mb.scss';

const thirdSection = ({title, subtitle}) => 
  <section className="third-section">
    <div>
      <h3>{subtitle}</h3>
      <h2>{title}</h2>
    </div>
  </section>


export default thirdSection;