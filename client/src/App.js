import React from 'react';
import {About, Footer, Header, Skills, Work} from './pages'
import {Navbar} from './components'
import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

const App = () => (
    <div className='app'>

    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
    </div>
)

export default App;