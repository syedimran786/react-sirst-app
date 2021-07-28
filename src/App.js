import './App.css';
// import Student from "./components/Student.jsx";
// import Employee from "./components/Employee";
// import Counter from './components/Counter';
// import CounterWithHooks from './components/CounterWithHooks';
// import CounterUpdation from './components/CounterUpdation';
// import PropsWithClass from './components/PropsWithClass';
// import PropsWithFunction from './components/PropsWithFunction';
// import ChildrenProperty from './components/ChildrenProperty';
import MyDefaultComponent from './components/MyDefaultProps'
import ReactEvents from './components/ReactEvents'
function App() {

  // let  employees=
  // [
  //   {
  //     username:"Dinga",
  //     password:1234,
  //     isEligible:"yes"
  //   },
  //   {
  //     username:"Raju",
  //     password:3421,
  //     isEligible:"yes"
  //   },
  //   {
  //     username:"Mohan",
  //     password:4201,
  //     isEligible:"No"
  //   },
  //   {
  //     username:"Mahesh",
  //     password:979634,
  //     isEligible:"yes"
  //   },
  //   {
  //     username:"Suresh",
  //     password:4535,
  //     isEligible:"No"
  //   },
  // ];
 
  return (
    <div className="App">
      {/* <Student/>
      <Employee/> */}
      {/* <Counter/> */}
      {/* <CounterWithHooks/> */}
      {/* <CounterUpdation/> */}
      {/* <PropsWithClass employeeDetails={employees}/> */}
      {/* <PropsWithFunction username="Leela"/> */}
      {/* <ChildrenProperty username="Syed Imran">
        Hello Qspiders
      </ChildrenProperty> */}
        {/* <MyDefaultComponent username={1010}/> */}
        <ReactEvents/>
    </div>
  );
}

export default App;
