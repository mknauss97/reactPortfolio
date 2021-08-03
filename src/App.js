import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Project from './pages/project';
import About from './pages/About';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <div className="App image">
      <Header />
      <Navbar />
      <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={Project} />
    </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
