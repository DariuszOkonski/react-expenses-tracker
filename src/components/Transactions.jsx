import React from 'react';
import { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';
import { useState } from 'react';

const Transactions = () => {
  const { addItem } = useContext(BudgetContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(text, 0, amount);
    clearInputs();
  }

  const handleIncome = (e) => {
    e.preventDefault();
    addItem(text, amount, 0)
    clearInputs();
  }

  const clearInputs = () => {
    setText('')
    setAmount('')
  }

  return (
    <div id="transactions">
      <p className="paragraph">ADD NEW TRANSACTION</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter text..."
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="number"
          placeholder="amount..."
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="buttons-section">
          <button type="submit" className="btn btn--secondary">Add Expense</button>
          <button onClick={handleIncome} className="btn btn--primary">Add Income</button>
        </div>
      </form>
    </div>
  );
}

export default Transactions;