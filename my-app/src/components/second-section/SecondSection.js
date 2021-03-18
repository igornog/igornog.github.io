import React from 'react';

import './second-section.scss';
import './second-section-mb.scss';

const secondSection = ({title, subtitle}) => 
  <section className="second-section">
    <div>
      <h3>{subtitle}</h3>
      <h2>{title}</h2>
    </div>
  </section>


export default secondSection;