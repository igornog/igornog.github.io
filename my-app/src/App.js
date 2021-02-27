import './App.scss';
import Header from '../src/components/header/header'
import Form from '../src/forms/subscription/form'
import MidSection from './components/mid-section/MidSection';

import tvImg from "../src/tv.png"
import mobileImg from "../src/mobile.jpg"
import devicesImg from "../src/devices.png"

function App() {
  return (
    <div className="App">
      <div className="top-section">
        <img className='bkg' alt=''/>
        <Header/>
        <article>
          <h2>Unlimited movies, TV<br/> shows, and more.</h2>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <Form/>
        </article>
      </div>

      <div className="middle-section">
        <MidSection
          title="Enjoy on your TV."
          subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          img={tvImg}
          alt="netflix-on-tv"
        />
        <MidSection
          title="Download your shows to watch offline."
          subtitle="Save your favorites easily and always have something to watch."
          img={mobileImg}
          alt="netflix-on-mobile"
        />
        <MidSection
          title="Watch everywhere."
          subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
          img={devicesImg}
          alt="netflix-on-devices"
        />
      </div>

    </div>
  );
}

export default App;
