import './chatRoomHeader.css';
import {useState} from 'react'

const ChatRoomHeader = ()=>{
    
    // En useState tenemos la variable que almacena 
    // la fecha y hora y el manejador
    const [time,setTime] = useState(new Date());

        // Set interval escuchará cada segundo y setTime 
        // cambiará la fecha cada segundo
        setInterval(()=>{
             setTime(new Date())
        },1000)
    

    return(
        <header>
            {/* Formateamos la fecha con toLocaleString */}
            <p>{time.toLocaleString()}</p>
        </header>
    )
}

export default ChatRoomHeader;