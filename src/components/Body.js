import React, { useRef, useState } from 'react'

const Body = () => {
    const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0); 
 
  const plus=(e)=> { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 

  const sub=(e)=>{
    e.preventDefault();
    setResult((result)=>result-Number(inputRef.current.value));
  }

  const product=(e)=>{
    e.preventDefault();
    setResult((result)=>result*Number(inputRef.current.value));
  }

  const divide=(e)=>{
    e.preventDefault();
    setResult((result)=>result/Number(inputRef.current.value));
  }

  const resetResult=()=>{
    setResult(" ");
  }

  const resetInput=()=>{
    setInputValue(''); // Clear the input field value
    inputRef.current.focus(); 
  }
  return (
    <div>
      <h1>Simplest Working Calculator</h1> 
      <form> 
        <p ref={resultRef}> 
          {result}
        </p> 
        <input
        pattern="[0-9]"
        ref={inputRef}
        type="number"
        placeholder="Type a number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update input value state
      />
        <button onClick={plus}>add</button> 
        <button onClick={sub}>Sub</button>
        <button onClick={product}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetResult}>Reset Result</button>
        <button onClick={resetInput}>Reset Input</button>
        
      </form> 
    </div>
  )
}

export default Body
