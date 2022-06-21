import { Navigate } from "react-router-dom";
import { useUser } from "../../utils/userContext";

const Login =()=>{

    const [user, setUser] = useUser();

    if(user) return <Navigate to='/'/>;


    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({name:'isu'})
    }

    return(
        <main className="login">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <label name='name'>name</label>
                <input type='text' />
                <label name='password'>password</label>
                <input type='password' id='password' />
                <button>acceder</button>
            </form>
        </main>
    )
}


export default Login;