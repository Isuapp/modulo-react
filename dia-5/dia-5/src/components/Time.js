import { useEffect, useState } from "react"

const Time = ()=>{

    const [time, setTime] = useState(new Date().toTimeString());

    useEffect(()=>{
        const t = setInterval(()=>{
            setTime(new Date().toTimeString())
        }, 1000)

        return ()=> clearInterval(t)
    },[])

    return <div>{time}</div>
}

export default Time;