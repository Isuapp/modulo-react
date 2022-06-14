import Avatar from './Avatar';
import './message.css'
import MessageBody from './MessageBody';
import messages from '../messages.json'
import Sent from './Sent';

const Message = ()=>{

    const addMessage = messages.map((message)=>{
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
           {addMessage}
        </>
    )
}

export default Message;