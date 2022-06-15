import * as React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import ChatRoomHeader from './components/ChatRoomHeader';
import Message from './components/Message';
import { useState } from 'react';
import messagesDB from './messages.json'
import SendMessage from './components/SendMessage';
import { nanoid } from 'nanoid'

function App() {

    const [messages, setMessages] = useState(messagesDB);

    const allMessages = messages.map((itemMessage)=>{
       return  <Message message={itemMessage} key={itemMessage.id}/>
    })
    
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

    
    return (
        <div>
            <ChatRoom>
                <ChatRoomHeader></ChatRoomHeader>
                <ul>
                    {allMessages}
                </ul>
                <SendMessage send={sendMessage} />
            </ChatRoom> 
        </div>
    );
}

export default App;
