import './App.css';
import { useEffect, useState } from 'react';
import HomePage from './pages/Home';

function App() {
  // https://codesandbox.io/s/beautiful-gauss-qhqoxj?file=/src/App.js
  // https://github.com/ib-sundeep/amazon-clone
  // //set state
  // const [count, setCount] = useState(0);

  // //special hook
  // useEffect(() => {
  //   console.log("you clicked on a ${count} button")
  // })

  // //DEPENDENCY ARRAY means use the use efffect part only if the value of count chaanges => only for count variable
  // // useEffect(()=>{
  // //   console.log("you clicked on a ${count} button")
  // // },[count])

  // //DEPENDENCY ARRAY means use the use effect part only once => single print
  // // useEffect(()=>{
  // //   console.log("you clicked on a ${count} button")
  // // },)

  // //use state or change state at onClick part
  // return (
  //   <div className="App">
  //     <h1>Hello</h1>
  //     <h1>{count}</h1>
  //     <button onClick={() => setCount(count + 1)}>Click</button>
  //     <h2>Code here</h2>
  //   </div>
  // );

  return (
    <HomePage/>
  );
}

export default App;
