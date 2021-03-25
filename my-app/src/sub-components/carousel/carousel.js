import React from "react";
import Slider from "react-slick";

import './carousel.scss';
import './carousel-mb.scss';

import Slide from './Slide'

import slide1Img from "../../../src/assets/slide-1-img.png"
import slide2Img from "../../../src/assets/slide-2-img.png"
import slide3Img from "../../../src/assets/slide-3-img.png"

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <Slide
        title="Um app onde você não mistura pessoal com profissional"
        textParagraph1="Chega no fim do dia, você abre seu aplicativo de mensagem e está cheio de mensagens da família, de paciente, de fornecedor, de centenas de grupos, um verdadeiro caos, certo?"
        textParagraph2="Com a Vitalicia você consegue organizar melhor os assuntos relacionados a seus pacientes e com isso você é capaz de oferecer um melhor atendimento, sem misturar sua vida pessoal."
        img={slide1Img}
        alt="Notificações de mensagem"
      />
      <Slide
        title="Um jeito inteligente de se comunicar com seus pacientes."
        textParagraph1="Através do chat, você consegue conversar com seus pacientes, tirar dúvidas, enviar e receber arquivos, resolver situações médicas, quando e onde estiver."
        textParagraph2="Um app feito para facilitar a comunicação."
        textStrong="Simples e fácil, como você sempre precisou."
        img={slide2Img}
        alt="Centralizar informações"
      />
      <Slide
        title="Uma maneira fácil e segura de centralizar as informações de saúde de seus pacientes"
        textParagraph1="Além do chat, também integramos seus registros clínicos e disponibilizamos informações do paciente através do perfil. Com isso você consegue ser mais eficiente, assertivo e promover uma experiência personalizada."
        textParagraph2="Sempre que precisar, você também consegue solicitar informações de saúde diretamente dos seus pacientes."
        textStrong="Mais precisão em menos cliques, isso é Vitalícia"
        img={slide3Img}
        alt="Centralizar informações"
      />
    </Slider>
  );
}