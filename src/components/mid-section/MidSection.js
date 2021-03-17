import React from 'react';

import './mid-section.scss';
import './mid-section-mb.scss';

const MidSection = ({title, subtitle, img, alt}) => 
  <article>
    <div className='img-wrapper'>
      <img src={img} alt={alt}/>
    </div>
    <div className='text-wrapper'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  </article>

export default MidSection;