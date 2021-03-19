import React from 'react';

import './reason-section.scss';
import './reason-section-mb.scss';

const reasonSection = ({title, subtitle, subtitle2, img, alt, index}) => 
  <section className="reason-section">
      <article>
        <div>
            <span>{index}</span>
            <h4>{title}</h4>
        </div>
        <p>{subtitle}</p>
        <p>{subtitle2}</p>
      </article>    
      <figure>
          <img src={img} alt={alt}/>
      </figure>
  </section>

export default reasonSection;