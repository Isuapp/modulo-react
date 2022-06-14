import {useState} from 'react';

const NumberSection = ()=>{

    const [num, setNum] = useState(0);

    const handleClickIncrement = ()=> setNum(num+1);
    const handleClickDecrement = ()=> setNum(num-1);

    return(
        <section>
            <h2>{num}</h2>
            <div>
                <button onClick={handleClickIncrement}>+</button>
                <button onClick={handleClickDecrement}>-</button>
            </div>
        </section>
    )
}

export default NumberSection;