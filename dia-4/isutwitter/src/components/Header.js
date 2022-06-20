import logo from '../logo.png';
import './header.css';

import { useToken } from '../TokenContext';
import { useModal } from '../ModalContext';

import Profile from './Profile';
import Login from './Login';

const Header = ()=>{

    const [token] = useToken();
    const [,setModal] = useModal();
    return(
        <header >
              <img className="logo" src={logo}  alt="logo" />
              <h2>ISUTWITTER</h2>
              {!token &&<button onClick={()=>setModal(<Login/>)}>Login</button>}
              {token && <Profile/>}
        </header>
    
    )
}

export default Header;