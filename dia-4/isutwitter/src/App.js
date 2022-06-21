import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import LisTweets from './components/ListTweets';
import Modal from './components/Modal';

import { useModal } from './ModalContext';
import { useDarkModeContext } from './darkModeContext';



const App = ()=> {

const [modal] = useModal();
const [darkMode] = useDarkModeContext();

  return (
    <div className={darkMode ? 'dark' : App}>
      <Header className={darkMode?  'darkHeader' : "App-header"}/>
      <LisTweets />
      {modal && <Modal>{modal}</Modal>}
      <Footer/>
    </div>
  );
}

export default App;
