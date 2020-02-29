import React from 'react';
import HistoryItem from './HistoryItem';
import { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

const HistoryItems = () => {
  const { budget } = useContext(BudgetContext);

  return budget.length > 0 ? (
    <div id="history-items">
      {
        budget.map(element =>
          <HistoryItem key={element.id} {...element} />)
      }
    </div>
  ) : (
      <div id="history-items">
        <p className="paragraph">
          Nothing to display
      </p>
      </div>
    );
}

export default HistoryItems;