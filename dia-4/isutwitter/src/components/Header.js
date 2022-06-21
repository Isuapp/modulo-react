import logo from '../logo.png';
import './header.css';

import { useToken } from '../TokenContext';
import { useModal } from '../ModalContext';


import Profile from './Profile';
import Login from './Login';
import { useDarkModeContext } from '../darkModeContext';

const Header = ({className})=>{

    const [token] = useToken();
    const [,setModal] = useModal();
    const [darkMode,setDarkMode] = useDarkModeContext()

    const handleDarkMode = ()=>{
      setDarkMode(!darkMode);
    };
    
    return(
        <header className={className}>
              <img className="logo" src={logo}  alt="logo" />
              <h2>ISUTWITTER</h2>
              {!token &&<button onClick={()=>setModal(<Login/>)}>Login</button>}
              {token && <Profile/>}
              <button onClick={handleDarkMode} >{darkMode ? 'Light mode' : 'Dark Mode'}</button>
        </header>
    
    )
}

export default Header;