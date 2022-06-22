import './App.css';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import LisTweets from './components/tweets/ListTweets';
import Modal from './components/modal/Modal';

import { useModal } from './context/ModalContext';
import { useDarkModeContext } from './context/darkModeContext';


const App = ()=> {

const [modal] = useModal();
const [darkMode] = useDarkModeContext();

  return (
    <div className={darkMode ? 'darkMode' : 'lightMode'}>
      <Header className={darkMode?  'darkMode' : "App-header"}/>
      <LisTweets className={darkMode ? 'darkMode' : ''}/>
      {modal && <Modal>{modal}</Modal>}
      <Footer className={darkMode?  'darkMode' : ''}/>
    </div>
  );
}

export default App;
