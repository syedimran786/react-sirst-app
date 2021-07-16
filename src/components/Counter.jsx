import React, { Component } from 'react'

 class Counter extends Component {

state=
{
    myCounter:0
}
    updateCounter=()=>{
        this.setState({myCounter:this.state.myCounter+1})
    }
    render() {
        return (
            <div>
                <h1>Counter Result: {this.state.myCounter}</h1>
                <button onClick={this.updateCounter}>Increment</button>
            </div>
        )
    }
}

export default Counter;