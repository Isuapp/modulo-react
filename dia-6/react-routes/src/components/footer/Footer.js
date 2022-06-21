import logo from '../../logo.png';
import './footer.css';
const Footer = ()=>{
    return(
        <footer>
              <img src={logo}  alt="logo" />
              <p>(c) Copyright 2022</p>
        </footer>
    )
}

export default Footer;