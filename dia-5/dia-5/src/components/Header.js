import logo from '../logo.png';
import './header.css';
const Header = ()=>{
    return(
        <header >
              <img className="logo" src={logo}  alt="logo" />
              <h2>use states and useeffects</h2>
        </header>
    )
}

export default Header;