import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>

      <>
        <div className='counter'>Counter:</div>
        <div>
          <button className='btn'>increase +</button>
          <button className='btn'>decrease -</button>
        </div>
      </>

      <div>
        <button className='btn'>Hide/Show Counter Number</button>
      </div>
    </div>
  );
};

export default Counter;
