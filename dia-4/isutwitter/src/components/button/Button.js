import './button.css';

const Button = ({click, children, className, disabled})=>{

    return(
        <button onClick={click} className={className} disabled={disabled}>{children}</button>
    )
}

export default Button;