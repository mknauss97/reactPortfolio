import './App.css';
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Projects from './pages/project';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Route exact path ='/' component={About} />
      <Route exact path ='/projects' component={Projects} />
      <Route exact path ='/contact' component={Contact} />

      <Footer />
    </Router>
  );
}

export default App;
