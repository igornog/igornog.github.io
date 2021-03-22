import './home.scss';
import Header from '../../components/header/header'
import FirstSection from '../../components/home-components/first-section/FirstSection'
import SecondSection from '../../components//home-components/second-section/SecondSection'
import ThirdSection from '../../components/home-components/third-section/ThirdSection'
import FourthSection from '../../components//home-components/fourth-section/FourthSection'
import Footer from '../../components/footer/Footer'

import presentationImg from "../../../src/assets/first-section-img.png"
import appImg from "../../../src/assets/third-section-img.png"

function Home() {
  return (
    <div className="App">
    <Header/>
      <FirstSection
        img={presentationImg}
        alt="Vitalicia on cellphones"
      />
      <SecondSection
        title="Por que escolher a Vitalicia?"
        subtitle="comece pelo porquê"
      />
      <ThirdSection
        title="Conheça nosso app e"
        title2="suas funcionalidades?"
        subtitle="tecnologia & saúde"
        img={appImg}
        alt="App funcionalities"
      />
      <FourthSection
        title="Quer simplificar o cuidado"
        title2="clínico e promover uma melhor"
        title3="experiência para seus pacientes?"
        subtitle="lista de espera"
      />
      <Footer/>
    </div>
  );
}

export default Home;
