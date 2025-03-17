// filepath: c:\Users\aparato\mi-super-proyecto-xdxdxd\frontend\src\App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios.get("https://mi-super-proyectoxdxd-production.up.railway.app/api/counter").then((response) => {
      setCounter(response.data.counter);
    });
  }, []);

  const incrementCounter = () => {
    axios.post("https://mi-super-proyectoxdxd-production.up.railway.app/api/counter/increment").then((response) => {
      setCounter(response.data.counter);
    });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Counter: {counter}</h2>
        <button onClick={incrementCounter}>Increment</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;