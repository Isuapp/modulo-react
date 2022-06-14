
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import NumberSection from './components/NumberSection';
import Items from './components/Items';

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <NumberSection/>
      <Items/>
      <Footer/>
    </div>
  );
}

export default App;
