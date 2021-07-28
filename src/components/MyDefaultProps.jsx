import React ,{Component} from 'react';
import PropTypes from 'prop-types';

class MyDefaultComponent extends Component
{
    render()
    {
        console.log(this.props.username)
        return(
            <div>
                <h1>Hello I am MyDefaultComponent Component</h1>
                <h2>Hello I am {this.props.username} </h2>
            </div>
        )
    }
}

// MyDefaultComponent.defaultProps=
// {
//     username:"Syed Imran",
//     age:23
// }
MyDefaultComponent.propTypes=
{
    username:PropTypes.string
}
export default MyDefaultComponent;