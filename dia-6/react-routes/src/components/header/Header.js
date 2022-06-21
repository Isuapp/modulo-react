import logo from '../../logo.png';

import './header.css';

import { NavLink } from 'react-router-dom';
import { useUser } from '../../utils/userContext';



const Header = ()=>{

    const [user,setUser] = useUser();

    const logout = ()=>{
        setUser(null);
        localStorage.removeItem('user');
    };

    return(
        <header>
            <div>
              <img className="logo" src={logo}  alt="logo" />
              <h2>ISUTWITTER</h2>
            </div>
            <nav>
                <NavLink to=''>Home</NavLink>
                <NavLink to='login'>Login</NavLink>
                {user &&
                    <NavLink to='categories'>Categories</NavLink>
                }
                <NavLink to='contact'>Contact</NavLink>
                <NavLink to='about'>About</NavLink>
            </nav>
            <button onClick={logout}>logout</button>
        </header>
    
    )
}

export default Header;