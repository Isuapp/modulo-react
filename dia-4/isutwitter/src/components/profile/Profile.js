import { useDarkModeContext } from '../../context/darkModeContext';
import useFetch from '../../hooks/useFetch'
import { useToken } from '../../context/TokenContext';

import Button from '../button/Button';

import './profile.css'

const Profile =()=>{

    const { data, status } = useFetch('http://localhost:4000/users');
    const [, setLocalStorageToken] = useToken();
    const [darkMode] = useDarkModeContext();

    if(status==='loading') return <p>Cargando...</p>

    const logout = ()=>{
        localStorage.removeItem('token');
        setLocalStorageToken(null)
    }
    
    return(
        <div className='profile'>
            <p>{data?.user.email}</p>
            <Button click={logout} className={darkMode ? 'light' : 'dark'}>logout</Button>
        </div>
    
         )
}

export default Profile;