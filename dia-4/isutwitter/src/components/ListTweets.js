import { useEffect, useState} from 'react';
import logo from '../logo.png'

import './listTweets.css';

const LisTweets = ()=>{

    const [tweets, setTweets] = useState([]);
    const  [loading, setLoading] = useState(false);

    useEffect(()=>{
        hanldeListTweets()
    },[])

    const hanldeListTweets = async ()=>{
        setLoading(true);
        try {
            const response = await fetch(`
                http://localhost:4000/tweets
            `)
            const {data} = await response.json();

           if(response.ok) setTweets(data.tweets);
           setLoading(false);
        } catch (error) {
            console.error(error)
        }

    }

    return(
        <ul>
            <h3>LISTA DE TWEETS</h3>
            {loading ? 

            <p>Cargando...</p>  : 
            
            tweets.map((tweet)=>{
                return(
                    <li key={tweet.id}>
                        <div className='user' >
                            <div className='imageWrapper'>
                                <img src={logo} />
                            </div>
                            <img src={`http://localhost:4000/${tweet.image}`} alt='tweet'/>
                            <h4>{tweet.email}</h4>
                        </div>
                        <p>{tweet.text}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default LisTweets;