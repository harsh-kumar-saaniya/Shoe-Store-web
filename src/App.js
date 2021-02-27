import React from 'react';
import './App.css';
import Header from './Components/Header';
// import Slider from './Components/Slider';
import Slider2 from './Components/Slider2';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import AppRouter from './Config/AppRouter';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <AppRouter />

    </div>
  );
}

export default App;
