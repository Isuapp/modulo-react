
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import LisTweets from './components/ListTweets';

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <LisTweets />
      <Footer/>
    </div>
  );
}

export default App;
