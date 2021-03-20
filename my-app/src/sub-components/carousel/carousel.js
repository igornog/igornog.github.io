import React from "react";
import Slider from "react-slick";

import './carousel.scss';
import './carousel-mb.scss';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>
          Uma maneira fácil e segura de
          centralizar as informações de 
          saúde de seus pacientes
        </h3>
        <p>
          Seus registros clinicos integrados em uma plataforma que promove o melhor cuidado e uma experiência clínica aos seus pacientes.
        </p>
        <p>
          Solicite as informações de saúde a qualquer momento, em qualquer lugar.
        </p>
        <p>
          <strong>Mais precisão em menos cliques, simples assim.</strong>
        </p>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
}