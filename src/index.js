//libraries
import React from 'react';
import ReactDOM from 'react-dom';

// redux hooks
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import form_reducer from './reducers/graph_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// reducers
// import {Graph_reducer } from './reducers/graph_reducer'
// import {combinedReducers} from './reducers/combinedReducer';

//components
import Header from './components/Header';
import Loading from './components/Loading';
import Visualization from './components/Visualization';

//CSS styles
import 'antd/dist/antd.less';
import './styles/normalize.css';
import { mapReducer } from './reducers/map_reducer';

// apply redux hooks to react
const store = createStore(mapReducer, applyMiddleware(thunk, logger));

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
