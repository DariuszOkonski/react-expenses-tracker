import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';
import { useEffect } from 'react';

export const BudgetContext = createContext();

const BudgetContextProvider = (props) => {
  const [budget, setBudget] = useState([]);

  useEffect(() => {
    let localData = localStorage.getItem('budget');
    localData = localData === null ? [] : JSON.parse(localData);
    setBudget(localData);
  }, [])

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

  const addItem = (text, income, expense) => {
    let newBudget = [...budget, { id: uuid(), text, income: Number(income), expense: Number(expense) }];
    setBudget(newBudget);
    localStorage.setItem('budget', JSON.stringify(newBudget));
  }

  const removeItem = (id) => {
    let newBudget = budget.filter(item => item.id !== id);
    setBudget(newBudget);
    localStorage.setItem('budget', JSON.stringify(newBudget));
  }

  return (
    <BudgetContext.Provider
      value={{ budget, displayBudget, displayIncome, displayExpenses, addItem, removeItem }
      }>
      {props.children}
    </BudgetContext.Provider>
  );
}

export default BudgetContextProvider;