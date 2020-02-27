import React from 'react';
import HistoryItem from '../components/HistoryItem';

const History = () => {
  return (
    <div id="history">
      <h2 className="header">History</h2>

      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
    </div>
  );
}

export default History;