
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Wait from './components/Wait';
import Time from './components/Time';
import Acordion from './components/Acordion';
import Spam from './components/Spam';

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <Acordion>
        <Wait />
      </Acordion>
      <Acordion>
        <Time />
      </Acordion>
      <Spam/>
      <Footer/>
    </div>
  );
}

export default App;
