import React, {useEffect, useState} from 'react'

function Home() {

    const [count, setCount] = useState(1);
    useEffect(()=>{                                                 
        document.title = `Hey ${count}`;
    },[count])

    return ( <>
    <h1>Count - {count}</h1>
    <button onClick={() => setCount(count+1) }>Increment</button>
    </>
    )
}

export default Home
