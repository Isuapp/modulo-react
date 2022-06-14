
import './avatar.css'
const Avatar = ({imgName})=>{

    return(
        <div className='avatar'>
            <img src={`/avatars/${imgName}.png`} alt="avatar user"/>
        </div>
    )
}

export default Avatar;