import React from 'react';

const HistoryItem = () => {
  return (
    <div id="history-item">
      <button className="btn btn--secondary">x</button>
      <p className="item-paragraph">Salary</p>
      <p className="item-paragraph">
        <span>+</span>$ 122220
      </p>
      <div className="green"></div>
    </div>
  );
}

export default HistoryItem;