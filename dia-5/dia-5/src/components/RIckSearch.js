import {useState, useEffect} from 'react';
import PageController from './PageController';

import './ricksearch.css'

const RickSearch = ()=>{


    const [name,setName] = useState('');
    const [status,setStatus] = useState('');
    const [species,setSpecies] = useState('');
    const [loading,setLoading] = useState(false);

    const [data,setData] = useState(null);
    const [error,setError] = useState(null);

    const [page, setPage] = useState(null);

    

    // Nuestro amigo useEffect siempre atento a las variables del array
    useEffect(()=>{ search(); },[name, status, species, page])


    // Petición a la api
    const search = async ()=>{
        try {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character?name=${name}&status=${status}&species=${species}&page=${page}`
            );
              
            // Obtenemos la informacion del body
            const data = await response.json();
             console.log(data)

            
            if(response.ok){
                 setData(data)
            }else{
                setError(data?.error || 'Error desconocido');
            };

        } catch (error) {
            setError(data?.error || 'Error desconocido')
        }finally{
            setLoading(false)
        }
    }

    // Llamada al formulario
    const handleSubmit = async (e)=>{
        e.preventDefault();

        setData(null);
        setLoading(true);
        setError(null);

        search();
    
    }

    // Cambiamos de página
    const next = ()=> {
        if(page< data?.info?.pages) setPage(page+1)
        else setPage(null)
        setPage(page+1);
    };
    const prev = ()=> {
        if(page>1) setPage(page-1);
        else setPage(null)
    };



    return(
        <main>
            <form onSubmit={handleSubmit} >
                <label htmlFor='name'>name</label>
                <input type='text' name='name' id='name' onChange={(e)=>{setName(e.target.value)}}/>

                
                <label htmlFor='status' id='status'>status</label>
                <select
                    onChange={(e)=>{setStatus(e.target.value)}}
                >
                    <option value=''>Cualquiera</option>
                    <option value='Alive'>Alive</option>
                    <option value='Dead'>Dead</option>
                    <option value='unknown'>Desconocido</option>
                </select>


                <label htmlFor='species'>name</label>
                <input type='text' name='species' id='species' onChange={(e)=>{setSpecies(e.target.value)}}/>

                <button disabled={loading}>{ loading ?'Cargando...':'Cargar'}</button>
            </form>
            {error&& <p>{error}</p> }
            {data&&(
                <>
                     <p>Se han encontrado {data.info.count}</p>
                     <ul>
                        {data.results.map((character)=>{
                            return(
                                <li key={character.id}>
                                    <img src={character.image} alt={`image of ${character.image}`}/>
                                    <h4>{character.name}</h4>
                                </li>
                            )
                        })}
                     </ul>
                </>
            )}
            <PageController next={next} prev={prev}/>
        </main>
    )
}

export default RickSearch