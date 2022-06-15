import './message.css'
import Sent from './Sent';
import Avatar from './Avatar';
import MessageBody from './MessageBody';

const Message = ({messages})=>{


    const allMessages = messages.map((itemMessage)=>{
        return (
            <li className='message' key={itemMessage.id}>
                <Avatar imgName={itemMessage.author}/>
                <MessageBody>
                    {itemMessage.body}
                    <Sent>{itemMessage.date}</Sent>
                </MessageBody>
            </li>
            )
     })
     
     return(
        <ul>
            {allMessages}
        </ul>
     )
 

}

export default Message;