import './App.css';
import { ChangeEvent, FormEvent, useState, useEffect, useRef, useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black"
    }
  }, [dark]);

  // const themeStyles = {
  //   backgroundColor: dark ? "black" : "white",
  //   color: dark ? "white" : "black"
  // }

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);


  return (
    <div className="app">
      {/* <header className="App-header"> */}
        <input type="text" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
      {/* </header> */}
    </div>
  )
}

function slowFunction(number: number) {
  console.log("Calling a slow function");
  for (let i=0; i<1000000000; i++) {};
  return number*2;
}

export default App;

/**
 * useMemo() memoizes the previous input and output and returns the memoized output if the input is the same
 * 
 * when the dependecy array of useEffect has an object, every time a component renders, the reference to the
 * object renews, so useEffect runs even though the object's properties haven't changed. Leverage useMemo for
 * the object's assigment in this case
 */