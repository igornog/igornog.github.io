import './App.scss';
import Header from '../src/components/header/header'
import FirstSection from '../src/components/first-section/FirstSection'
import SecondSection from '../src/components/second-section/SecondSection'
import ThirdSection from '../src/components/third-section/ThirdSection'
import FourthSection from '../src/components/fourth-section/FourthSection'
import Footer from './components/footer/Footer'

import presentationImg from "../src/assets/first-section-img.png"
import appImg from "../src/assets/third-section-img.png"

function App() {
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

export default App;
