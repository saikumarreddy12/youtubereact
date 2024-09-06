import { useState } from "react"





const Index=()=>{
    const[Count,setCount]=useState(0);


    const decrement =()=>{
        setCount (Count-1);
    };

    const increment =()=>{
        setCount (Count+1);
    };



    return(
        <div>
            <button onClick={decrement}>decrement</button>
            <span>count:{Count}</span>
            <button  onClick={increment}>increment</button>
        </div>
    )
}

export default Index