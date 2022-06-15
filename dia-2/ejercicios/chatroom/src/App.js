import * as React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import ChatRoomHeader from './components/ChatRoomHeader';
import Message from './components/Message';
import { useState } from 'react';
import messagesDB from './messages.json'
import SendMessage from './components/SendMessage';

function App() {

    const [messages, setMessages] = useState(messagesDB);


    
    return (
        <div>
            <ChatRoom>
                <ChatRoomHeader></ChatRoomHeader>
                <Message messages={messages} />
                <SendMessage messages={messages} setMessages={setMessages}/>
            </ChatRoom> 
        </div>
    );
}

export default App;
