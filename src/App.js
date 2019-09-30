import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"
import LightSwitch from "./components/LightSwitch"
import UserBoard from './components/UserBoard'

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title"/>
        <LightSwitch />
        <UserBoard />
      </main>
      <p>This is not comfusing at All?</p>
      <h2>Wecome to Codaisseur</h2>
    </div>
    );
  }
  
  export default App;
  