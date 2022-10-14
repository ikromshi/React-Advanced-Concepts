import './App.css';
import { ChangeEvent, FormEvent, useState, useEffect, useRef } from 'react';

function App() {
  const [name, setName] = useState<string>("");
  const renderCount = useRef<number>(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  })

  return (
    <div className="app">
      <header className="App-header">
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="re-render the app"/>
        <div>Hi, my name is {name}</div>
        <div>I rendered {renderCount.current} times</div>
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
 */