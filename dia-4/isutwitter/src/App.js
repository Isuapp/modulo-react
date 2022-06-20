import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import LisTweets from './components/ListTweets';
import Modal from './components/Modal';

import { useModal } from './ModalContext';



function App() {

  const [modal] = useModal();
  return (
    <div className="App">
      <Header className="App-header"/>
      <LisTweets />
      {modal && <Modal>{modal}</Modal>}
      <Footer/>
    </div>
  );
}

export default App;
