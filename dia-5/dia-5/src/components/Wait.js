import useTimeOut from '../hooks/useTimeOut';

const Wait = ()=>{

    const [timeOut] = useTimeOut()

    return(
        <div> {timeOut ? 'Fin del tiempo' : 'Espera 10s egundos'}</div>
    )

}


export default Wait;