import Header from '../../components/header/header'
import FirstSection from '../../components/home-components/first-section/FirstSection'
import SecondSection from '../../components/home-components/second-section/SecondSection'
import ThirdSection from '../../components/home-components/third-section/ThirdSection'
import FourthSection from '../../components/home-components/fourth-section/FourthSection'
import Footer from '../../components/footer/footer'
import FooterMobile from '../../components/footer/footer-mb'

import './home.scss';
import './home-mb.scss';

import presentationImg from "../../../src/assets/first-section-img.png"

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
        subtitle="tecnologia & saúde"
      />
      <FourthSection
        subtitle="lista de espera"
      />
      <Footer/>
      <FooterMobile/>
    </div>
  );
}

export default Home;
