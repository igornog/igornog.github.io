import React from 'react';

import './fourth-section.scss';
import './fourth-section-mb.scss';

const fourthSection = ({title, subtitle}) => 
  <section className="fourth-section">
    <div>
      <h3>{subtitle}</h3>
      <h2>{title}</h2>
    </div>
  </section>


export default fourthSection;