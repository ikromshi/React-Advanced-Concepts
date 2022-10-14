import './App.css';
import { ChangeEvent, FormEvent, useState, useEffect, useRef } from 'react';

function App() {
  const [name, setName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const focus = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="app">
      <header className="App-header">
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
        <div>Hi, my name is {name}</div>
        <button onClick={focus}>Focus</button>
      </header>
    </div>
  )
}

export default App;

/**
 * A ref is similar to state in that it persists through renders
 * A ref doesn't cause a component to re-update when it gets changed
 * 
 * Use Cases: 
 *    To store a previous value in it that persists through rerenders and doesn't cause rerenders
 *    ref attribute sets the "current" property of object from useRef to the DOM element it's in, so we can focus on it by doing inputRef.current.focus()
 */