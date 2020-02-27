import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div id="app">
        <Header />

        <div className="container">
          Container
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
