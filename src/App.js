import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const counterOperation = useCallback(
    (type, payload) => {
      dispatch({ type, payload });
    },
    [dispatch]
  );

  //react init
  //useEffect run -> action -> 10
  //re render
  //re revalute
  //useEffect run -> action -> 10
  //re render
  //re revalute

  useEffect(() => counterOperation('increase', 10), [counterOperation]);

  const handlerCounterValue = (value) => {
    if (value < 1) {
      return 'no number';
    }
    return value;
  };

  const toggleCounter = () => {
    console.log('sad');
    dispatch({ type: 'toggleCounter' });
  };

  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>
      {globalState.showCounter && (
        <>
          <div className='counter'>
            Counter: {handlerCounterValue(globalState.value)}
          </div>
          <div>
            <button
              className='btn'
              onClick={() => counterOperation('increase', 5)}
            >
              increase +
            </button>
            <button
              className='btn'
              onClick={() => counterOperation('decrease', 2)}
            >
              decrease -
            </button>
          </div>
        </>
      )}

      <div>
        <button className='btn' onClick={toggleCounter}>
          Hide/Show Counter Number
        </button>
      </div>
    </div>
  );
}

export default App;
