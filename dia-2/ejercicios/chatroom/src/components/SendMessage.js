import { useRef } from 'react';
import Avatar from './Avatar';
import './sendMessage.css'
import { nanoid } from 'nanoid'

const SendMessage = ({messages,setMessages})=>{

    const inputRef = useRef();

    const sendMessage = (e)=>{
        e.preventDefault();
        
        let inputValue = e.target.elements.message;
        let actualDate = new Date();
        
        const bodyMessage = {
            id:nanoid(),
            author: 456327,
            body: inputValue.value,
            date: actualDate.toLocaleTimeString()
        }

        setMessages([...messages, bodyMessage]);
        inputValue.value = '';
    }

    

    return(
        <div className='sendMessage--wrapper'>
            <Avatar />
            <form onSubmit={sendMessage}>
                <input className="sendMessage" type="text" name="message" ref={inputRef}></input>
                <button>enviar</button>
            </form>

        </div>
    )
};

export default SendMessage;