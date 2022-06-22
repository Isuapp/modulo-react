import logoLight from '../../assets/brand/logo_isaac_min_white.svg';
import logo from '../../assets/brand/logo_isaac_min.svg';

import './footer.css';
import { useDarkModeContext } from '../../context/darkModeContext';

const Footer = ({className})=>{
    const [darkMode] = useDarkModeContext()
    return(
        <footer className={className}>
              <img src={darkMode ? logo : logoLight}  alt="logo" />
              <p>(c) Copyright 2022</p>
        </footer>
    )
}

export default Footer;