import Header from './Header';
import './App.css';
import Modulos from './modulos';
import Section from './Section';
import modulos_1 from './modulos_1.json'




function App() {

  return (
    <div className="App">
      <Header/>
      <main>
        <Section title="Modulo" modulos={modulos_1}/>
      </main>
    </div>
  );
}

export default App;
