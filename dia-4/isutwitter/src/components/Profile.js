
import { useReducer } from 'react';
import useFetch from '../hooks/useFetch'
import { useToken } from '../TokenContext';

const Profile =()=>{

    const { data, status } = useFetch('http://localhost:4000/users');
    const [, setLocalStorageToken] = useToken();

    if(status==='loading') return <p>Cargando...</p>

    const logout = ()=>{
        localStorage.removeItem('token');
        setLocalStorageToken(null)
    }
    
    return(
        <div>
            <p>{data?.user.email}</p>
            <button onClick={logout}>logout</button>
        </div>
    
         )
}

export default Profile;