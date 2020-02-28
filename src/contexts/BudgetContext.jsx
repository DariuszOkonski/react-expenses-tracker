import React, { createContext, useState } from 'react';

export const BudgetContext = createContext();

const BudgetContextProvider = (props) => {
  const [budget, setBudget] = useState([
    { id: 1, text: 'salary', income: 500, expense: 0 },
    { id: 2, text: 'book', income: 0, expense: 10 },
    { id: 3, text: 'monitor', income: 0, expense: 180 },
    { id: 4, text: 'book', income: 0, expense: 23 },
    { id: 5, text: 'salary', income: 320, expense: 0 },
    { id: 6, text: 'desk lamp', income: 0, expense: 98 },
  ]);

  const displayBudget = () => {
    const income = budget.reduce((acc, el) => acc + el.income, 0);
    const expense = budget.reduce((acc, el) => acc + el.expense, 0);
    return income - expense;
  }

  const displayIncome = () => {
    return budget.reduce((acc, el) => acc + el.income, 0);
  }

  const displayExpenses = () => {
    return budget.reduce((acc, el) => acc + el.expense, 0);
  }

  return (
    <BudgetContext.Provider value={{ budget, displayBudget, displayIncome, displayExpenses }}>
      {props.children}
    </BudgetContext.Provider>
  );
}

export default BudgetContextProvider;