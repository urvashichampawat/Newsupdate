
import './App.css';

import React, { Component, Fragment } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
export default class App extends Component {
 pageSize = 15;
  render() {
    return (
      <div>
       <Router>
      <Fragment>
       <NavBar/>
       
       <Routes>
          <Route exact path="/" element={<News key="General" pageSize={this.pageSize} country="in" category="General" />}> </Route>
        <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business"/>}> </Route>
          {/* <Route exact path="/business"> <News key="business" pageSize={this.pageSize} country="in" category="business" /> </Route>*/}
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}> </Route>
          <Route exact path="/general" element={<News key="General" pageSize={this.pageSize} country="in" category="General" />}> </Route>
          <Route exact path="/health"  element={<News key="health" pageSize={this.pageSize} country="in" category="health" />}> </Route>
          <Route exact path="/science"  element={<News key="science" pageSize={this.pageSize} country="in" category="science" />}> </Route>
          <Route exact path="/Sports" element={<News key="Sports" pageSize={this.pageSize} country="in" category="Sports" />}> </Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" /> }> </Route>
        </Routes>
        </Fragment>
        </Router>
       </div>
       
    )
  }
}
