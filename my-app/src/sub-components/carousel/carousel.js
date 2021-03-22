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
        title="Através do chat, você consegue conversar com os seus pacientes, tirar dúvidas, resolver situações médicas."
        textParagraph1="Um app feito para você prestar todo cuidado que seus pacientes precisam e mais importante, sem misturar suas informações e conversas pessoais."
        textParagraph2="Solicite as informações de saúde a qualquer momento, em qualquer lugar."
        textStrong="Simples e fácil, como sempre deveria ser."
        img={slide2Img}
        alt="Centralizar informações"
      />
      <Slide
        title="Uma maneira fácil e segura de centralizar as informações de saúde de seus pacientes"
        textParagraph1="Seus registros clinicos integrados em uma plataforma que promove o melhor cuidado e uma experiência clínica aos seus pacientes."
        textParagraph2="Solicite as informações de saúde a qualquer momento, em qualquer lugar."
        textStrong="Mais precisão em menos cliques, simples assim."
        img={slide3Img}
        alt="Centralizar informações"
      />
    </Slider>
  );
}