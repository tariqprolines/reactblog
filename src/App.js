import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './assets/css/bootstrap.min.css';
import './assets/css/templatemo.css';
import './assets/css/custom.css';
import './assets/css/boxicon.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Home } from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';  
import Pricing from './components/Pricing';
import WorkDetail from './components/WorkDetail';

export class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/About">
                    <About />
                </Route>
                <Route exact path="/Work">
                    <Work />
                </Route>
                <Route exact path="/Pricing">
                    <Pricing />
                </Route>
                <Route exact path="/Contact">
                    <Contact />
                </Route>
                <Route exact path="/WorkDetail">
                    <WorkDetail />
                </Route>
                </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App

