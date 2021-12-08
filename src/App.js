import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>
      <div className='counter'>Counter: 0</div>;
      <div>
        <button className='btn'>increase +</button>
        <button className='btn'>decrease -</button>
      </div>
      <div>
        <button className='btn'>Hide/Show Counter Number</button>
      </div>
    </div>
  );
}

export default App;
