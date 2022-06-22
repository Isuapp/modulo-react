import './login.css'

import {useState} from 'react'
import { useToken } from '../../context/TokenContext';
import {useModal} from '../../context/ModalContext';
import Button from '../button/Button';
import { useDarkModeContext } from '../../context/darkModeContext';

const Login = ()=>{

    const [ , setTokenInLocalSorage] = useToken();
    const [ , setModal] = useModal();
    const [darkMode] = useDarkModeContext();

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ status, setStatus] = useState(null)


    const handleSubmit = async (e)=>{
        e.preventDefault();

        setStatus('loading');

        try {
            const res = await fetch('http://localhost:4000/login',{
                method:'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email, 
                    password,
                }),
            })

            if(!res.ok)throw new Error(res.statusText);

            const {data} = await res.json();
            setTokenInLocalSorage(data.token)
            setStatus('success')
            setModal(null)

        } catch (error) {
            console.error(error);
            setStatus('error'); 
        }
    }
    return(
            <form onSubmit={handleSubmit}> 
                <input  
                    type='email'
                    name='email'
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder='email'
                    />
                <input  
                    type='password'
                    name='password'
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder='password'
                    />
                    <Button
                        disabled={status==='loading'}
                        className={darkMode ? 'light' : 'dark'}
                    >
                    {status==='loading' ? 'Cargando' : 'Entrar'}
                    </Button>

                    {status==='error'&& (
                        <p className='error'>Error </p>
                    )}

                    {status==='success'&& (
                        <p>Logueado con exito</p>
                    )}
            </form>
    )

}

export default Login;