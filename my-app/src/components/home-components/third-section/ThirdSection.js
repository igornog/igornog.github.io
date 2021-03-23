import React from 'react';
import Carousel from '../../../sub-components/carousel/carousel'

import './third-section.scss';
import './third-section-mb.scss';

const thirdSection = ({title, subtitle}) => 
  <section className="third-section">
    <div>
      <h3>{subtitle}</h3>
      <div className="subtitle-border">
        <span></span>
      </div>
      <h2>Conheça nosso app e<br/> suas funcionalidades?</h2>
    </div>
    <div className="content">
        <Carousel/>
    </div>
  </section>


export default thirdSection;