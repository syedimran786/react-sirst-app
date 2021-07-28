import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

 class PropsWithClass extends Component {

    state={
        employees:[
    {
      username:"Dinga",
      password:1234,
      isEligible:"yes"
    },
    {
      username:"Raju",
      password:3421,
      isEligible:"yes"
    },
    {
      username:"Mohan",
      password:4201,
      isEligible:"No"
    },
    {
      username:"Mahesh",
      password:979634,
      isEligible:"yes"
    },
    {
      username:"Suresh",
      password:4535,
      isEligible:"No"
    },
  ]
    }
    render() {
        console.log(this.props);
        return (
            <div>
                {/* <table border="2px" rules="all" cellSpacing="20px">
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>IsEligible</th>
                    </tr>
                    <tr>
                        <td>{this.props.username}</td>
                        <td>{this.props.password}</td>
                        <td>{this.props.isEligible}</td>
                    </tr>
                </table> */}
                {/* <ChildComponent employeeDetails={this.props.employeeDetails}/> */}
                {/* <ChildComponent employeeDetails={this.state.employees}/> */}
            </div>
        )
    }
}

export default PropsWithClass;