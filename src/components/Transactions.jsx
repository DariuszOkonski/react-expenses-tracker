import React from 'react';

const Transactions = () => {
  return (
    <div id="transactions">
      <p className="paragraph">ADD NEW TRANSACTION</p>
      <form>
        <input type="text" placeholder="enter text..." required />
        <input type="number" placeholder="amount..." required />
        <div className="buttons-section">
          <input type="submit" className="btn btn--primary" value="Add Income" />
          <input type="submit" className="btn btn--secondary" value="Add Expense" />
        </div>
      </form>
    </div>
  );
}

export default Transactions;