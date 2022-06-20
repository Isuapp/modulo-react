import {useState, useEffect} from 'react'

const useFetch = ()=>{

    const [data, setData] = useState();

    useEffect(()=>{

        const fetchData = async()=>{
            try {
                const res = await fetch(url);
                const resData = await res.json();
                setData(resData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    },[url])

    return data;
}

export default useFetch