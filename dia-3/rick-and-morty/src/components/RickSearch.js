import {useState} from 'react';

const RickSearch = ()=>{


    const [name,setName] = useState('');
    const [status,setStatus] = useState('');
    const [species,setSpecies] = useState('');
    const [loading,setLoading] = useState(false);

    const [data,setData] = useState(null);
    const [error,setError] = useState(null);


    const handleSubmit = async (e)=>{
        e.preventDefault();

        setData(null);
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character?name=${name}&status=${status}&species=${species}&`
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
                                    <p>{character.name}</p>
                                    <img src={character.image}/>
                                </li>
                            )
                        })}
                     </ul>
                </>
            )}
        </main>
    )
}

export default RickSearch