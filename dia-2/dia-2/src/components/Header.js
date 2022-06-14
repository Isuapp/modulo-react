import logo from '../logo.png';
import './header.css';
const Header = ()=>{
    return(
        <header >
              <img className="logo" src={logo}  alt="logo" />
              <h2>EVENTS</h2>
        </header>
    )
}

export default Header;