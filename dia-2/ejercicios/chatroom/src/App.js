import * as React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import ChatRoomHeader from './components/ChatRoomHeader';
import Message from './components/Message';

function App() {
    return (
        <div>
            <ChatRoom>
                <ChatRoomHeader></ChatRoomHeader>
                <Message />
            </ChatRoom> 
        </div>
    );
}

export default App;
