import { useEffect, useState} from 'react';

const useTimeOut = (ms=10000)=>{

    const [timeExpired, setTimeExpired] = useState(false);
    
    useEffect(()=>{
        const t = setTimeout(()=>{
            setTimeExpired(true);
        },ms)
        return ()=> clearTimeout(t)
    },[ms]);

    const reset = ()=> setTimeExpired(false)

    return [timeExpired, reset];

}


export default useTimeOut;