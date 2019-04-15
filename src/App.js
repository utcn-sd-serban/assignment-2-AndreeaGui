import React from 'react';
import './App.css';


import {HashRouter, Switch, Route} from "react-router-dom"
import SmartQuestionDetails from './view/SmartQuestionDetails';
import SmartQuestionsList from './view/SmartQuestionsList';
import SmartCreateQuestion from './view/SmartCreateQuestion';
import SmartFilterQuestionsByTag from './view/SmartFilterQuestionsByTag';
import SmartFilterQuestionsByTtitle from './view/SmartFilterQuestionsByTitle';

const App = () => (
  //curly brackets used to pass a variable from js
  <div className="App">
    <HashRouter>
      <Switch>
        <Route exact = {true} component = {SmartQuestionsList} path="/"/>
        <Route exact = {true} component = {SmartCreateQuestion} path="/create-question"/>
        <Route exact = {true} component = {SmartQuestionDetails} path="/question-details/:index"/>
        <Route exact = {true} component = {SmartFilterQuestionsByTag} path="/filter-by-tag"/>
        <Route exact = {true} component = {SmartFilterQuestionsByTtitle} path="/filter-by-title"/>
      </Switch>
    </HashRouter>
  </div>
);


export default App;
