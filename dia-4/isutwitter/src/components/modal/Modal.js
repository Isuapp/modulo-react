import './modal.css'

const Modal = ({children})=>{

    return(
        <div className='modal_wraper'>
          
                {children}
          
        </div>
    )
}

export default Modal;