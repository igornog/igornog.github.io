import Button from '../../../atoms/Button/Button'
import React from 'react';

import './first-section.scss';
import './first-section-mb.scss';

const scrollIntoView = () => {
  document.getElementById('form').scrollIntoView({behavior: "smooth"}) 
}

const firstSection = ({title, subtitle, img, alt}) => 
  <section className="first-section">
    <article>
      <h2>
        Comunicação fácil,<br/> 
        organizada e segura.<br/>
        <span>
          Como você sempre<br/>
          precisou.
        </span>
      </h2>
      <p>
        Sem mais confusão na hora de atender seus pacientes online.<br/>
        Com a Vitalícia você centraliza a comunicação com seus pacientes 
        e mantém seus registros clínicos organizados, de maneira 100% segura 
        e em um só lugar. <br/><strong>Feito para as suas necessidades!</strong> 
      </p>
      <Button onClick={scrollIntoView}>quero conhecer</Button>
    </article>
    <figure>
      <img
        src={img}
        alt={alt}
      />
    </figure>
  </section>


export default firstSection;