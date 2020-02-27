import React from 'react';
import HistoryItem from './HistoryItem';

const HistoryItems = () => {
  const empty = true;

  return (
    <div id="history-items">
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
    </div>
  );
}

export default HistoryItems;