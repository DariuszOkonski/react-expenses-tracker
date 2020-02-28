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
  ])

  return (
    <BudgetContext.Provider value={{ budget }}>
      {props.children}
    </BudgetContext.Provider>
  );
}

export default BudgetContextProvider;