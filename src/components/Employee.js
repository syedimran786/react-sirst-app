import {useState} from "react";
let Employee=()=>
{

    let color=useState("Red");
   
    return (
        <div>
            <h1>{color} from Functional Component</h1>
        </div>
    )
}

export default Employee;