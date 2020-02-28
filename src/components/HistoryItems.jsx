import React from 'react';
import HistoryItem from './HistoryItem';
import { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

const HistoryItems = () => {
  const { budget } = useContext(BudgetContext);

  return (
    <div id="history-items">
      {
        budget.map(element =>
          <HistoryItem key={element.id} {...element} />)
      }
    </div>
  );
}

export default HistoryItems;