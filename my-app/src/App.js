import './App.scss';
import Header from '../src/components/header'
import Form from '../src/forms/form'

function App() {
  return (
    <div className="App">
      <img className='bkg' alt=''/>
      <Header/>
      <article>
        <h2>Unlimited movies, TV<br/> shows, and more.</h2>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <Form/>
      </article>
    </div>
  );
}

export default App;
