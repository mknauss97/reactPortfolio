import './App.css';
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Project from './pages/project';
import About from './pages/About';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Route exact path ='/' component={About} />
      <Route exact path ='/project' component={Project} />

      <Footer />
    </Router>
  );
}

export default App;
