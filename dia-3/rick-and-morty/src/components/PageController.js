import './pagecontroller.css'

const PageController = ({next,prev})=>{

    return(
        <article>
            <button onClick={prev}>⬅️</button>
            <button onClick={next}>➡️</button>
        </article>
    )
}

export default PageController;