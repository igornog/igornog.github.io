import Button from '../../atoms/Button/Button'
import React from 'react';

import './first-section.scss';
import './first-section-mb.scss';

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
        Sem mais confusão na hora de atender seus pacientes<br/> online. 
        Com a Vitalícia você centraliza a comunicação<br/> com seus pacientes 
        e mantém seus registros clínicos<br/> organizados, de maneira 100% segura 
        e em um só<br/> lugar . <strong>Feito para as suas necessidades!</strong> 
      </p>
      <Button>quero conhecer</Button>
    </article>
    <figure>
      <img
        src={img}
        alt={alt}
      />
    </figure>
  </section>


export default firstSection;