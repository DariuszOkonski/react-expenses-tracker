import React from 'react';
import { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

const Expense = () => {
  const { displayExpenses } = useContext(BudgetContext);

  return (
    <div id="expense">
      <p className="paragraph">Expense</p>
      <p className="paragraph red-text">-${displayExpenses()}</p>
    </div>
  );
}

export default Expense;