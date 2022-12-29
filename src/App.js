
import './App.css';

import React, { Component, Fragment } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
 pageSize = 15;
 apikey = process.env.REACT_APP_NEWS_API
 
 state ={
  progress:0
 }

 setProgress = (progress)=> {
  this.setState({progress: progress})
 }

  render() {
    return (
      <div>
       <Router>
      <Fragment>
       <NavBar/>
       <LoadingBar
       height={3}
        color='#f11946'
        progress={this.state.progress}
       // onLoaderFinished={() => setProgress(0)}
      />
      {/* above code for thin loading bar under navbar just like in youtube*/}
       <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="General" pageSize={this.pageSize} country="in" category="General" />}> </Route>
        <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business"/>}> </Route>
          {/* <Route exact path="/business"> <News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business" /> </Route>*/}
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}> </Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="General" pageSize={this.pageSize} country="in" category="General" />}> </Route>
          <Route exact path="/health"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pageSize} country="in" category="health" />}> </Route>
          <Route exact path="/science"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize} country="in" category="science" />}> </Route>
          <Route exact path="/Sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="Sports" pageSize={this.pageSize} country="in" category="Sports" />}> </Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pageSize} country="in" category="technology" /> }> </Route>
        </Routes>
        </Fragment>
        </Router>
       </div>
       
    )
  }
}
