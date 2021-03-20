import React from 'react';

import './founders.scss';
import './founders-mb.scss';

const FounderCard = ({title, subtitle, subtitleStrong, img, alt}) => 
  <section className="founder-card-section">
    <figure>
      <img src={img} alt={alt}/>
    </figure>
    <article>
      <div>
        <h4>{title}</h4>
        <p>{subtitle}<strong>{subtitleStrong}</strong></p>
      </div>
      <span></span>
    </article>    
  </section>

export default FounderCard;