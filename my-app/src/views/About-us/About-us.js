import './about-us.scss';
import Header from '../../components/header/header'
import Footer from '../../components/footer/Footer'

import FirstSection from '../../components/aboutus-components/first-section/FirstSection'
import SecondSection from '../../components/aboutus-components/second-section/SecondSection'
import aboutusImg from "../../../src/assets/about-us-img.png"

function AboutUs() {
  return (
    <div className="App">
    <Header/>
    <FirstSection
      img={aboutusImg}
      alt="Sobre nós"
    />
    <SecondSection
      title="Fundadores"
      subtitle="quem faz acontecer"
    />
    <Footer/>
    </div>
  );
}

export default AboutUs;
