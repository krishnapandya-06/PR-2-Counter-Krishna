import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h2 className='main'>Count is {count}</h2>
      <div className='buttons'>
        <button className='main-btn' onClick={handleIncrement}>+</button>
        <button className='main-btn' onClick={handleReset}>Reset</button>
        <button className='main-btn' onClick={handleDecrement}>-</button>
      </div>
    </>
  );
}

export default App;