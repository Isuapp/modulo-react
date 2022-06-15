import './message.css'
import Sent from './Sent';
import Avatar from './Avatar';
import MessageBody from './MessageBody';

const Message = ({message})=>{

    return(
        <li className='message'>
            <Avatar imgName={message.author}/>
            <MessageBody>
                {message.body}
                <Sent>{message.date}</Sent>
            </MessageBody>
        </li>
    )
}

export default Message;