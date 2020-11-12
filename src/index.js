import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './state/reducers/';
import thunk from 'redux-thunk';
import { Button, Layout } from 'antd';
// import Filter_forms from './components/Filter_forms';

//components
import Header from './components/Header';
import Loading from './components/Loading';
import Visualization from './components/Visualization';
import form_reducers from './state/reducers/graph_reducers';

//CSS styles
import 'antd/dist/antd.less';
import './styles/normalize.css';

const store = createStore(form_reducers);
const { Footer, Content } = Layout;

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
      <Header />
      <Loading />
      <Visualization />
    </>
  );
}

export default App;
