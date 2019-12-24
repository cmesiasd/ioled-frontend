import React from 'react';
import './App.css';
import Tab from './Components/Tab';

function App() {
  return (
    <div className= "container-fluid justify-content-center">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h1 className="navbar-brand">Dashboard FrontEnd iOLED</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      < Tab />
    </div>
  );
}

export default App;
