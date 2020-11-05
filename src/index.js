import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import Filters from './components/Filters';

import 'antd/dist/antd.less';
import './index.css';

import reducer from './state/reducers/';
import thunk from 'redux-thunk';
import { Button, Layout } from 'antd';

import NavBar from './components/NavBar';

import Visualization from './components/Visualization';
import Loading from './components/common/Loading';

import FilterSearch from './components/Filters';


const store = createStore(reducer, applyMiddleware(thunk));
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
      <NavBar />
      <Loading />
      <Visualization />
    </>

    <Router>
      <Layout className="layout">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Link to="/filter" style={{ textAlign: 'right' }}>
              <Button type="primary">Open Filters</Button>
            </Link>
          </Route>
          <Route exact path="/filter">
            <FilterSearch />
          </Route>
        </Switch>
        <Content style={{ textAlign: 'center' }}>Map Goes Here </Content>
        <Footer style={{ textAlign: 'center' }}>Copyright</Footer>
      </Layout>
    </Router>

  );
}

export default App;
