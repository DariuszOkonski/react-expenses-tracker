import React from 'react';

function App() {
  return (
    <div className="App">
      <h2 className="header">Hello world</h2>
      <h2 className="header header--small">Header 1</h2>
      <h2 className="header header--large">Header 2</h2>

      <a className="btn btn--secondary" href="/">a tag button</a>
      <button className="btn btn--primary">button tag button</button>
      <br /><br />

      <a className="btn btn--secondary btn--block" href="/">a tag button</a>
      <button className="btn btn--primary btn--block">button tag button</button>

      <input className="input" type="text" placeholder="enter name" />
      <input className="input" type="number" placeholder="enter age" />

    </div>
  );
}

export default App;
