import React,{Component} from 'react';

class ReactEvents extends Component
{

    // constructor()
    // {
    //     super();
    //     this.clickme=this.clickme.bind(this)
    // }

    state=
    {
        isToggle:true
    }

    clickme=()=>
    {
        this.setState({isToggle:false})
        
    }
    render()
    {
        console.log(this.state.isToggle);
        return(
            <div>
                <h1>
                    I Am React Component
                </h1>
                {/* <button onClick={this.clickme.bind(this)}>Click</button> */}

                <button onClick={this.clickme}>Click</button>
            </div>
        )
    }
}

export default ReactEvents;