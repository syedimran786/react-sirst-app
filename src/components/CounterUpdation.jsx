import React,{Component} from 'react';
import { useState } from 'react';
import './CounterUpdation.css';
class CounterUpdation extends Component
{
    state={
        myCounter:0
    }

    incrementCounter=()=>{
        this.setState({myCounter:this.state.myCounter+1});
    }

    decrementCounter=()=>{
        this.setState({myCounter:this.state.myCounter-1});
    }

    resetCounter=()=>{
        this.setState({myCounter:0});
    }
render()
    {
        console.log("hello");
        return(
            <div className="counter">
                <h1>Counter: {this.state.myCounter}</h1>
                <div className="div-btn">
                    <button onClick={this.incrementCounter}>Increment</button>
                    <button onClick={this.decrementCounter}>Decrement</button>
                    <button onClick={this.resetCounter}>Reset</button>
                </div>
            </div>
        )
    }
}

// let CounterUpdation=()=>{
// let [myCounter,setState]=useState(0);

//         let incrementCounter=()=>{
//             setState(myCounter+1);
//         }
    
//         let decrementCounter=()=>{
//             setState(myCounter-1);
//         }
    
//         let resetCounter=()=>{
//             setState(myCounter=0);
//         }

// return(
//     <div className="counter">
//                      <h1>Counter: {myCounter}</h1>
//                      <div className="div-btn">
//                          <button onClick={incrementCounter}>Increment</button>
//                          <button onClick={decrementCounter}>Decrement</button>
//                          <button onClick={resetCounter}>Reset</button>
//                      </div>
//                  </div>
               
// )
// }

export default CounterUpdation;