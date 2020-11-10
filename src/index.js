import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './state/reducers/';
import thunk from 'redux-thunk';
import { Button, Layout } from 'antd';
import Filter_forms from './components/Filter_forms';

//components
import Header from './components/Header';
import Loading from './components/Loading';
import Visualization from './components/Visualization';

//CSS styles
import 'antd/dist/antd.less';
import './styles/normalize.css';

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
      <Header />
      <Loading />
      <Visualization />
    </>

    // <Router>
    //   <Layout className="layout">
    //     <NavBar />
    //     <Switch>
    //       <Route exact path="/">
    //         <Link to="/filter" style={{ textAlign: 'right' }}>
    //           <Button type="primary">Open Filters</Button>
    //         </Link>
    //       </Route>
    //       <Route exact path="/filter">
    //         <FilterSearch />
    //       </Route>
    //     </Switch>
    //     <Content style={{ textAlign: 'center' }}>Map Goes Here </Content>
    //     <Footer style={{ textAlign: 'center' }}>Copyright</Footer>
    //   </Layout>
    // </Router>
  );
}

export default App;
