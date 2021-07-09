import './Student.css'
import React from 'react';
function Student(props)
{
    console.log(props)
    return (
        <div className="student-bg">
                <h1>Hello I am {props.name}</h1>
                <p>I am from {props.dept}</p>
            </div>
    )
}




export default Student;