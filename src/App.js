
import './App.css';
import Student from './components/Student';
function App() {

  let students=
  [
    {
      name:"Syed Imran",
      dept:"CSE",
    },
    {
      name:"Yogesh",
      dept:"Mech"
    },
    {
      name:"Roopa",
      dept:"ISE"
    },
    {
      name:"Sourabh",
      dept:"Civil"
    }
  ]
  return (
    <div className="App">
      <Student name={students[0].name} dept={students[0].dept}/>
      <Student name={students[1].name} dept={students[1].dept}/>
      <Student name={students[2].name} dept={students[2].dept}/>
      <Student name={students[3].name} dept={students[3].dept}/>
    </div>
  );
}

export default App;
