import React from 'react';

import './second-section.scss';
import './second-section-mb.scss';
import FounderCard from '../../../sub-components/founderCard/founderCard';

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
        subtitle="Luis Albinati é engenheiro, deixou a Microsoft para iniciar a Vitalicia em outubro de 2019 com a motivação de democratizar o acesso das pessoas às suas informações de saúde. Possui experiência técnica com mais de 12 anos em desenvolvimento de software e 8 anos dedicados a vendas e parcerias com passagem por empresas como IBM, Ericsson, Red Hat, SAP e Oracle. Luis também foi Country Manager da alemã EXASOL e advisor estratégico de algumas empresas."
        img={luisalbinatiImg}
        alt="Luis Albinati"
        link="https://www.linkedin.com/in/luisalbinati/"
      />
      <FounderCard
        title="Danilo Gaspar"
        subtitle="Danilo Gaspar é administrador por formação e com pós em Gestão de Negócios, iniciou a carreira em Venture Capital, e tendo também passagem pelo Banco Original, Grupo Votorantim e recentemente atuou 3 anos como investidor de startups de saúde no Hospital Albert Einstein. Ao lado do Luis, em 2019, fundou a Vitalicia. Atualmente, é responsável por produto, gestão financeira e relacionamento com investidores."
        img={danilogasparImg}
        alt="Danilo Gaspar"
        link="https://www.linkedin.com/in/danilo-gaspar-7a48a563/"
      />
    </div>
  </section>


export default thirdSection;