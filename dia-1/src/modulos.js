import modulos from './modulos.json';

function Modulos(){

        // Generamos automaticamente el li de cada producto
  const modulosLi = modulos.map((modulo)=>{
    return(
      <li>
      <article>
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

export default Modulos;