import { useRef } from 'react';
import Avatar from './Avatar';
import './sendMessage.css'

const SendMessage = ({send,imgNameSent})=>{

    const inputRef = useRef();

    

    return(
        <div className='sendMessage--wrapper'>
            <Avatar imgName={imgNameSent}/>
            <form onSubmit={send}>
                <input className="sendMessage" type="text" name="message" ref={inputRef}></input>
                <button>enviar</button>
            </form>

        </div>
    )
};

export default SendMessage;