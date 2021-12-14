import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../store/index';

const Counter = () => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>

      <>
        <div className='counter'>Counter: {globalState.value}</div>
        <div>
          <button className='btn' onClick={() => dispatch(increase(5))}>
            increase +
          </button>
          <button className='btn' onClick={() => dispatch(decrease(2))}>
            decrease -
          </button>
        </div>
      </>

      <div>
        <button className='btn'>Login</button>
      </div>
    </div>
  );
};

export default Counter;
