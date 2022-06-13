import logo from './logo.png';
import './Header.css';


function Header(){
    return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Hack a boss</h1>
      </header>
    )
}

export default Header;