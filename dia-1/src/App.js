import Header from './Header';
import './App.css';
import modulos from './modulos.json'




function App() {

    // Generamos automaticamente el li de cada producto
  const modulosLi = modulos.map((modulo)=>{
      return(
        <li>
        <article>
          <h3>{modulo.name}</h3>
        </article>
      </li>
      )
  })

  return (
    <div className="App">
      <Header/>
      <main>
        <h1>React Hack a boss</h1>
        <article>
          <ul>
            {modulosLi}
          </ul>
        </article>
      </main>
    </div>
  );
}

export default App;
