import React, { Component } from 'react'

class ChildComponent extends Component {
    render() {
        console.log("Child :",this.props);
        return (
            <div>
                I am Child of Props with Class Component
                <table border="2px" rules="all" cellPadding="20x">
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>IsEligible</th>
                    </tr>
                    {this.props.employeeDetails.map(emp=>
                        {
                            return <tr>
                                <td>{emp.username}</td>
                                <td>{emp.password}</td>
                                <td>{emp.isEligible}</td>
                            </tr>
                        })}
                </table>
            </div>
        )
    }
}

export default ChildComponent;