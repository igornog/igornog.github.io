import React from 'react';
import ReasonSection from '../../../sub-components/reason/reason'

import './second-section.scss';
import './second-section-mb.scss';

import dataImg from '../../../assets/data-img.png'
import lockImg from '../../../assets/lock-img.png'
import chatImg from '../../../assets/chat-img.png'

const secondSection = ({title, subtitle}) => 
  <section className="second-section">
    <div>
      <h3>{subtitle}</h3>
      <div className="subtitle-border">
        <span></span>
      </div>
      <h2>{title}</h2>
    </div>
    <ReasonSection
      title="Você centraliza todos os dados 
      de saúde em um só lugar"
      subtitle="Integramos os dados de saúde dos seus pacientes
      para que você tenha todas as informações relevantes quando e onde estiver.
      Tudo na palma da mão."
      img={dataImg}
      alt="data-centralized"
      index="1"
    />
    <ReasonSection
      title="Oferecemos a segurança clínica 
      que você precisa"
      subtitle="Você pode conversar, responder dúvidas, enviar fotos e arquivos com todo o sigilo e segurança.
      Utilizamos criptografia avançada para que a sua experiência seja como deve ser, 100% segura!"
      img={lockImg}
      alt="security"
      index="2"
    />
    <ReasonSection
      title="Facilitamos a comunicação
      entre você e seus pacientes"
      subtitle="Através do chat, você consegue conversar com os seus pacientes, tirar dúvidas, resolver situações médicas, marcar consultas e muito mais."
      subtitle2="Um app feito para você prestar todo cuidado que seus pacientes precisam e mais importante, sem misturar suas informações e conversas pessoais."
      img={chatImg}
      alt="chat-communication"
      index="3"
    />
  </section>


export default secondSection;