import React from 'react';
import { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

const HistoryItem = ({ id, text, income, expense }) => {
  const { removeItem } = useContext(BudgetContext);

  return (
    <div id="history-item">
      <button
        className="btn btn--secondary"
        onClick={() => removeItem(id)}
      >x</button>

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