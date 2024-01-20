
import { useState } from 'react';
import './App.css';

function App() {
  let [count , setCount] = useState(0);
  const Decrement = ()=>{
    if(count >0)
 setCount(count => count- 1)
  }
  return (
    <>
<h1>Counter App</h1>
    
    <button onClick={()=>{setCount(count+1)}}>Increment (+)</button>
    
<span>{count}</span>
    <button onClick={Decrement}>Decrement (-)</button>
    <button onClick={()=>{setCount(0)}}>Reset</button>
    </>
    
 
    
  );
}

export default App;
