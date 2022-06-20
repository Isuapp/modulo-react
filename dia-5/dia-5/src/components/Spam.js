import useTimeOut from "../hooks/useTimeOut";
import './spam.css'


const Spam = ()=>{

   const [show, reset] = useTimeOut(1000)


    return(
        show &&(
            <div className="spam">
                <button onClick={reset}>x</button>
                <h3>Sublévate a la newsletter</h3>
            </div>
        )
    )
}

export default Spam;