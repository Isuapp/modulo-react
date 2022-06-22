import { useEffect, useState} from 'react';
import logo from '../../assets/brand/logo_isaac_min.svg';

import './listTweets.css';

const LisTweets = ({className})=>{

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
            {loading ? 

            <p>Cargando...</p>  : 
            
            tweets.map((tweet)=>{
                return(
                    <li key={tweet.id} className={className}>
                        <div className='imageUser-wraper' >
                            <img src={logo} />
                        </div>
                        <div className='content' >
                            <span>{tweet.email}</span>
                            <p>{tweet.text}</p>
                            <div className='image-wraper'>
                                <img src={`http://localhost:4000/${tweet.image}`} alt='tweet'/>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default LisTweets;