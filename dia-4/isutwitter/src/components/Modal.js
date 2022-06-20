import './modal.css'

const Modal = ({children})=>{

    return(
        <div className='modal_wraper'>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Modal;