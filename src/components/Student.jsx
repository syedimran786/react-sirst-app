import React,{Component} from 'react';
import "./Student.css";
class Student extends Component
{

    state=
    {
        studentsDetails:
        [
            {
                image:"https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682__340.jpg",
                name:"Raju",
                usn:462463,
                age:27,
                dept:"CSE",
                marks:456
            },
            {
                image:"https://cdn.pixabay.com/photo/2021/03/29/20/28/girl-6135235__340.jpg",
                name:"Sheela",
                usn:462463,
                age:27,
                dept:"CSE",
                marks:456
            },
            {
                image:"https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644__340.jpg",
                name:"Laila",
                usn:462463,
                age:27,
                dept:"CSE",
                marks:456
            },
            {
                image:"https://cdn.pixabay.com/photo/2016/11/23/18/42/boy-1854308__340.jpg",
                name:"Ramu",
                usn:462463,
                age:27,
                dept:"CSE",
                marks:456
            },
            {
                image:"https://cdn.pixabay.com/photo/2016/08/13/13/45/boy-1590771__340.jpg",
                name:"Sikandar",
                usn:462463,
                age:27,
                dept:"CSE",
                marks:456
            },
            {
                image:"https://cdn.pixabay.com/photo/2016/03/27/19/20/indian-1283789__340.jpg",
                name:"Albert Einstein",
                usn:462463,
                age:27,
                dept:"CSE",
                marks:456
            },
        ]
    }

    render(){
       let studentData=this.state.studentsDetails.map(student=>{
           return <tr>
                    <td>
                        <img src={student.image} alt="" />
                    </td>
                    <td>{student.name}</td>
                    <td>{student.usn}</td>
                    <td>{student.age}</td>
                    <td>{student.dept}</td>
                    <td>{student.marks}</td>
                </tr>
        }
        );

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>USN</th>
                            <th>Age</th>
                            <th>Department</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                    {studentData}
                    </tbody>
                    
                </table>
            </div>
        )
    }
}

export default Student;