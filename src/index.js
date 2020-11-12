//libraries
import React from 'react';
import ReactDOM from 'react-dom';

// redux hooks
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import form_reducer from './reducers/graph_reducer';

//components
import Header from './components/Header';
import Loading from './components/Loading';
import Visualization from './components/Visualization';

//CSS styles
import 'antd/dist/antd.less';
import './styles/normalize.css';

// apply redux hooks to react
const store = createStore(form_reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

function App() {
  return (
    <>
      <Header />
      <Loading />
      <Visualization />
    </>
  );
}

export default App;
