import store from './store/index';

import { Provider } from 'react-redux';
import Counter from './components/Counter';

import './App.css';
function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
      {/* another components */}
    </>
  );
}

export default App;
