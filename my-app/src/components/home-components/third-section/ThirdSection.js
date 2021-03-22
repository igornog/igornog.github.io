import React from 'react';
import Carousel from '../../../sub-components/carousel/carousel'

import './third-section.scss';
import './third-section-mb.scss';

const thirdSection = ({title, title2, subtitle}) => 
  <section className="third-section">
    <div>
      <h3>{subtitle}</h3>
      <div className="subtitle-border">
        <span></span>
      </div>
      <h2>{title}</h2>
      <h2>{title2}</h2>
    </div>
    <div className="content">
        <Carousel/>
    </div>
  </section>


export default thirdSection;