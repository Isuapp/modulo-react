import Avatar from './Avatar';
import './message.css'
import MessageBody from './MessageBody';
import messagesDB from '../messages.json'
import Sent from './Sent';

const Message = ()=>{

    const allMessages = messagesDB.map((message)=>{
        return(
            <div className='message' key={message.id}>
                <Avatar imgName={message.author}/>
                <MessageBody>
                    {message.body}
                    <Sent>{message.date}</Sent>
                </MessageBody>
            </div>
        )
    })

    return(
        <>
           {allMessages}
        </>
    )
}

export default Message;