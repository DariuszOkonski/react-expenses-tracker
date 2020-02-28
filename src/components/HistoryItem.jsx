import React from 'react';

const HistoryItem = ({ id, text, income, expense }) => {
  return (
    <div id="history-item">
      <button className="btn btn--secondary">x</button>
      <p className="item-paragraph">{text}</p>
      <p className="item-paragraph">
        {
          income > 0 ?
            <span className="green-text"><span>+ $</span>{income}</span>
            :
            <span className="red-text"><span>- $</span>{expense}</span>
        }

      </p>
      {
        income > 0 ?
          <div className="green"></div>
          :
          <div className="red"></div>
      }

    </div>
  );
}

export default HistoryItem;