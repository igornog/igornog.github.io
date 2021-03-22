import React from 'react';
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import './index.css';
import Home from './views/Home/Home';
import AboutUs from './views/About-us/About-us';
import PrivacyPolicy from './views/PrivacyPolicy/PrivacyPolicy';
import TermsofService from './views/TermsofService/TermsofService';
import reportWebVitals from './reportWebVitals';
import ScrollTop from './atoms/ScrollTop/ScrollTop';

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <ScrollTop/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sobre-nós" component={AboutUs} />
      <Route exact path="/política-de-privacidade" component={PrivacyPolicy} />
      <Route exact path="/termos-de-uso" component={TermsofService} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
