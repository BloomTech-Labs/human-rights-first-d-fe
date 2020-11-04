import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import 'antd/dist/antd.less';

import reducer from './state/reducers/';
import thunk from 'redux-thunk';

import NavBar from './components/NavBar';
import Filters from './components/Filters';
import Visualization from './components/Visualization';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

function App() {
  return (
    <>
      <NavBar />
      <Filters />
      <Visualization />
    </>
  );
}
