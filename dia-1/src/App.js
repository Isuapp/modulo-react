import Header from './Header';
import './App.css';
import modulos from './modulos.json'
import Modulos from './modulos';




function App() {

  return (
    <div className="App">
      <Header/>
      <main>
        <Modulos/>
      </main>
    </div>
  );
}

export default App;
