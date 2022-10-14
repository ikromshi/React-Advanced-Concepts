import './App.css';
import { ChangeEvent, FormEvent, useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState<HTMLInputElement | null>(null);
  const [lastName, setLastName] = useState<HTMLInputElement | null>(null);
  const [age, setAge] = useState<HTMLInputElement | null>(null);

  const handleClick = () => {
    console.log(firstName?.value);
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      lastName?.focus();
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    console.log(value);
  }

  return (
    <div className="App">
      <div>
        <span>First name: </span>  
        <input 
          ref={(input) => {setFirstName(input)}} 
          onKeyUp={handleKeyUp}
          type="text" 
        />
      </div>
      <div>
        <span>Last name: </span>  
        <input ref={(input) => {setLastName(input)}} type="text" onChange={handleChange}
/>
      </div>
      <div>
        <span>Age name: </span>  
        <input ref={(input) => {setAge(input)}} type="text" />
      </div>
      <div>
        <button type='submit' onClick={() => {handleClick()}}>Submit</button>
      </div>
    </div>
  );
}

export default App;

/**
 * React ref use cases:
 *    To access dom elements
 */