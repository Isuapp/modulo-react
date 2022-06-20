import { useState } from "react"
import './acordion.css'


const Acordion = ({children, title})=>{

    const [show, setShow] = useState(false);

    const handleClick= ()=> setShow(!show);

    return (
        <div className="acordion_wraper">
            <header className="acordion">
                {title}
                <button onClick={handleClick}>+/-</button>
            </header>
            {show&&<div>{children}</div>}
        </div>
    )
}

export default Acordion;