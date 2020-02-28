import React from 'react';
import { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

const Income = () => {
  const { displayIncome } = useContext(BudgetContext);

  return (
    <div id="income">
      <p className="paragraph">Income</p>
      <p className="paragraph green-text">+${displayIncome()}</p>
    </div>
  );
}

export default Income;