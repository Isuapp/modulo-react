import Header from './Header';
import './App.css';
import Section from './Section';
import modulos_1 from './modulos_1.json';
import modulos_2 from './modulos_2.json';




function App() {

  return (
    <div className="App">
      <Header/>
      <main>
        <Section title="Módulo" modulos={modulos_1}/>
        <Section title="Extras" modulos={modulos_2}/>
      </main>
    </div>
  );
}

export default App;
