import './messageBody.css'
const MessageBody = ({children})=>{

    return(
        <div className='message-body'>
            <p>{children}</p>
        </div>
    )
}

export default MessageBody;