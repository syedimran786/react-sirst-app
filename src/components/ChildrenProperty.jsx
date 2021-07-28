import React, { Component } from 'react'

export default class ChildrenProperty extends Component {
  
    render() {
        console.log(this.props);
        let {username,children}=this.props;
        return (
            <div>
                <h1>Hello I am Children Property Component</h1>
                <h1>{username}</h1>
                <h4>{children}</h4>
            </div>
        )
    }
}


// import React from 'react'

// const ChildrenProperty = (props) => {
//     console.log(props)
//     return (
//         <div>
//              <h1>Hello I am Children Property Component</h1>
//              <h4>{props.children}</h4>
//         </div>
//     )
// }

// export default ChildrenProperty
