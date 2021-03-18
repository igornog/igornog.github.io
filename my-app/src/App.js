import './App.scss';
import Header from '../src/components/header/header'
import FirstSection from '../src/components/first-section/FirstSection'
import SecondSection from '../src/components/second-section/SecondSection'
import ThirdSection from '../src/components/third-section/ThirdSection'
import FourthSection from '../src/components/fourth-section/FourthSection'

import firstSectionImg from "../src/assets/first-section-img.png"

function App() {
  return (
    <div className="App">
    <Header/>
      <FirstSection
        img={firstSectionImg}
        alt="Vitalicia on cellphones"
      />
      <SecondSection
        title="Por que escolher a Vitalicia?"
        subtitle="comece pelo porquê"
      />
      <ThirdSection
        title="Conheça nosso app e suas funcionalidades?"
        subtitle="tecnologia & saúde"
      />
      <FourthSection
        title="Quer simplificar o cuidado 
          clínico e promover uma melhor 
          experiência para seus pacientes?"
        subtitle="lista de espera"
      />
    </div>
  );
}

export default App;
