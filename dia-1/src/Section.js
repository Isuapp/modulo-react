

function Section({title, modulos}){
    const modulosLi = modulos.map((modulo)=>{
        return(
        <li>
          <article>
            <h2>{title}</h2>
            <h3>{modulo.name}</h3>
          </article>
        </li>
        )
    })
    return(
        <article>
            <ul>
            {modulosLi}
            </ul>
        </article>
    )
}

export default Section;