import * as React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import ChatRoomHeader from './components/ChatRoomHeader';
import Message from './components/Message';
import Avatar from './components/Avatar';
import MessageBody from './components/MessageBody';

function App() {
    return (
        <div>
            <ChatRoom>
                <ChatRoomHeader></ChatRoomHeader>
                <Message>
                    <Avatar />
                    <MessageBody></MessageBody>
                </Message>
            </ChatRoom> 
        </div>
    );
}

export default App;
