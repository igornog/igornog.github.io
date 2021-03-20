import './about-us.scss';
import Header from '../../components/header/header'
import FirstSection from '../../components/home-components/first-section/FirstSection'
import SecondSection from '../../components/second-section/SecondSection'
import ThirdSection from '../../components/home-components/third-section/ThirdSection'
import FourthSection from '../../components/fourth-section/FourthSection'
import Footer from '../../components/footer/Footer'

import presentationImg from "../../../src/assets/first-section-img.png"
import appImg from "../../../src/assets/third-section-img.png"

function AboutUs() {
  return (
    <div className="App">
    <Header/>
    <Footer/>
    </div>
  );
}

export default AboutUs;
