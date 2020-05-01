import React from 'react';
import './App.css';
import { Alert } from './Modal'
import { Footer } from './Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Some text here</h1>
       <Alert />
      </header>
      <Footer />
    </div>
  );
}

export default App;
