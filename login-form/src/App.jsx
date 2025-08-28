import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('hide');
  
  function ToggleDisplay() {
    setDisplay(display === 'hide' ? 'show' : 'hide');
  }

  return (
    <>
      <div>
        <h2>Hello, welcome to my website</h2>

        <input type='text' placeholder='Email' />
        <br />

        <input
          type={display == 'hide' ? 'text' : 'password'}
          placeholder='Password'
        />
        <button onClick={ToggleDisplay}>{display}</button>
        <br />

        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </>
  );
}

export default App
