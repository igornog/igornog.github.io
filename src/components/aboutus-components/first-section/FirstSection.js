import React from "react";

import "./first-section.scss";
import "./first-section-mb.scss";

const firstSection = ({ title, subtitle, img, alt }) => (
  <section className="about-us first-section">
    <article>
      <h2>
        Somos a<span> Vitalícia</span>
      </h2>
      <p>
        Vivemos em um contexto onde nossas informações de saúde se perdem ao
        longo do tempo, não temos registro, não temos acesso e com isso,
        perdemos nosso poder de escolha. Não sabemos o que é o melhor para nós
        mesmos.
      </p>
      <p>
        Nascemos com o intuito de mudar o modo como as pessoas se relacionam com
        a sua saúde. Queremos empodera-las a tomarem as melhores decisões e
        acreditamos que o acesso a informação é a chave para que isso aconteça.
      </p>
    </article>
    <figure>
      <img src={img} alt={alt} />
    </figure>
  </section>
);

export default firstSection;
