import React from 'react';

import './second-section.scss';
import './second-section-mb.scss';
import FounderCard from '../../../sub-components/founders/founderCard';

import danilogasparImg from '../../../assets/danilogaspar.png' 
import luisalbinatiImg from '../../../assets/luisalbinati.png' 

const thirdSection = ({title, title2, subtitle}) => 
  <section className="about-us second-section">
    <div>
      <h3>{subtitle}</h3>
      <div className="subtitle-border">
        <span></span>
      </div>
      <h2>{title}</h2>
      <h2>{title2}</h2>
    </div>
    <div className="content">
      <FounderCard
        title="Luis Albinati"
        subtitle="Sem mais confusão na hora de atender seus pacientes online. Com a Vitalícia você centraliza a comunicação com seus pacientes e mantém seus registros clínicos organizados, de maneira 100% segura e em um só lugar."
        subtitleStrong=" Feito para as suas necessidades!"
        img={luisalbinatiImg}
        alt="Luis Albinati"
      />
      <FounderCard
        title="Danilo Gaspar"
        subtitle="Sem mais confusão na hora de atender seus pacientes online. Com a Vitalícia você centraliza a comunicação com seus pacientes e mantém seus registros clínicos organizados, de maneira 100% segura e em um só lugar."
        subtitleStrong=" Feito para as suas necessidades!"
        img={danilogasparImg}
        alt="Danilo Gaspar"
      />
    </div>
  </section>


export default thirdSection;