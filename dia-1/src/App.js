import logo from './logo.png';
import './App.css';

const modulos =[
  {
    name:'HTML',
    curso:'Hack a Boss Bootcamp'
  },
  {
    name:'CSS',
    curso:'Hack a Boss Bootcamp'
  },
  {
    name:'JS',
    curso:'Hack a Boss Bootcamp'
  },
  {
    name:'NODE',
    curso:'Hack a Boss Bootcamp'
  },
  {
    name:'REACT',
    curso:'Hack a Boss Bootcamp'
  }
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>React Hack a boss</h1>
        <article>
          <ul>
          <li>
            <article>
              <h3>{modulos[0].name}</h3>
            </article>
          </li>
          <li>
            <article>
              <h3>{modulos[1].name}</h3>
            </article>
          </li>
          <li>
            <article>
              <h3>{modulos[2].name}</h3>
            </article>
          </li>
          <li>
            <article>
              <h3>{modulos[3].name}</h3>
            </article>
          </li>
          <li>
            <article>
              <h3>{modulos[4].name}</h3>
            </article>
          </li>
          </ul>
        </article>
      </main>
    </div>
  );
}

export default App;
