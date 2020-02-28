import React from 'react';
import { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

const Balance = () => {
  const { displayBudget } = useContext(BudgetContext);

  return (
    <div id="balance">
      <p className="paragraph">YOUR BALANCE:</p>
      <p className="paragraph">$ {displayBudget()}</p>
    </div>
  );
}

export default Balance;