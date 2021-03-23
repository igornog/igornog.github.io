import React from 'react';
import Form from '../../../forms/subscription/form'

import './fourth-section.scss';
import './fourth-section-mb.scss';

import formImg from '../../../assets/form-section.png'

const fourthSection = ({title, subtitle}) => 
  <section className="fourth-section" id="form">
    <div className="content">
      <article>
        <div>
        <h3>{subtitle}</h3>
        <div className="subtitle-border">
          <span></span>
        </div>
          <h2>Quer simplificar o cuidado<br/> clínico e promover uma melhor<br/> experiência para seus pacientes?</h2>
        </div>
        <p>Entre para a nossa lista vip e seja o primeiro a 
          saber do nosso lançamento. Preencha o forms ao lado 
          que em breve traremos boas notícias! 
        </p>
        <figure>
          <img src={formImg} alt="Entre na nossa lista VIP"/>
        </figure>
      </article>
      <div className="form-wrapper">
        <Form/>
      </div>
    </div>
  </section>


export default fourthSection;