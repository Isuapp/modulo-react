

function Section({title, modulos}){
    const modulosLi = modulos.map((modulo)=>{
        return(
        <li key={modulo.id}>
          <article>
            <h2>{title}</h2>
            <h4>{modulo.name}</h4>
            <h4>{modulo.curso}</h4>
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