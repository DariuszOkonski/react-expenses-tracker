import React from 'react';
import Balance from '../components/Balance';
import Income from '../components/Income';
import Expense from '../components/Expense';

const New = () => {
  return (
    <div id="new">
      <h2 className="header">New Transactions</h2>

      <Balance />

      <div className="costs">
        <Income />
        <Expense />
      </div>

    </div>
  );
}

export default New;