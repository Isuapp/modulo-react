import logoLight from '../../assets/brand/logo_isaac_min_white.svg';
import logo from '../../assets/brand/logo_isaac_min.svg';
import './header.css';

import { useToken } from '../../context/TokenContext';
import { useModal } from '../../context/ModalContext';

import Profile from '../profile/Profile';
import Login from '../login/Login';
import { useDarkModeContext } from '../../context/darkModeContext';
import Button from '../button/Button';

const Header = ({className})=>{

    const [token] = useToken();
    const [,setModal] = useModal();
    const [darkMode,setDarkMode] = useDarkModeContext()

    const handleDarkMode = ()=>{
      setDarkMode(!darkMode);
    };
    
    return(
        <header className={className}>
            <h1>ISUTWITTER</h1>
            <img className="logo" src={darkMode ? logo : logoLight}  alt="logo" />
            <div>         
              {!token &&
              <Button 
                click={()=>setModal(<Login/>)} 
                className={darkMode ? 'light' : 'dark'}
              >Login
              </Button>}
              {token && <Profile/>}
              <Button click={handleDarkMode} className={darkMode ? 'light' : 'dark'} >{darkMode ? 'Light mode' : 'Dark Mode'}</Button>
            </div>
        </header>

    
    )
}

export default Header;