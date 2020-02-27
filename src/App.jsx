import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import New from './views/New';
import History from './views/History';
import About from './views/About';
import Error from './views/Error';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div id="app">
        <Header />

        <div className="container">
          <Switch>
            <Route exact path="/" component={New} />
            <Route exact path="/history" component={History} />
            <Route exact path="/about" component={About} />
            <Route component={Error} />
          </Switch>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
