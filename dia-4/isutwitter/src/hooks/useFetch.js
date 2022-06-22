import { useToken } from '../context/TokenContext';

import {useState, useEffect} from 'react';

const useFetch = (url)=>{
    const [token] = useToken();
    const [data,setData] = useState(null);
    const [status, setStatus] = useState('loading');

    useEffect(()=>{
        
        const fetchData = async ()=>{

            try {
                
                const params = !token 
                    ?
                    {}
                    :
                    {
                        headers:{
                            Authorization:token
                        },
                    };

                setStatus('loading')

                const res = await fetch(url, params);

                if(!res.ok) throw new Error(res.statusText);

                const {data} = await res.json();

                setData(data);
                setStatus('success')
                
            } catch (err) {
                    console.error(err);
                    setStatus('error')
            }
        };

        fetchData()

    },[url,token]);

    return { 
        data,
        status
    }
}

export default useFetch;