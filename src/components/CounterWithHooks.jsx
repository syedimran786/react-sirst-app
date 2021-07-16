import {useState} from "react";

let CounterWithHooks=()=>{

    console.log(useState(4));
   let [myCounter,setState]=useState(0);

   let updateCounter=()=>{
    setState(myCounter+1)
}
    return(
        <div>
                <h1>Counter Result: {myCounter}</h1>
                <button onClick={updateCounter}>Increment</button>
            </div>
    )
}

export default CounterWithHooks;