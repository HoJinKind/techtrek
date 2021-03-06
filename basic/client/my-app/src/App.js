import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Alert from "./Components/layout/Alert";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import createHistory from "history/createBrowserHistory";
import Forms from "./Components/Forms";
export const history = createHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Fragment>
        <Navbar></Navbar>
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/forms" component={Forms}></Route>
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
