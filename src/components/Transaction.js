import React from 'react';

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li
      className={`transaction-item ${
        transaction.amount < 0 ? 'negative' : 'positive'
      }`}
    >
      {transaction.description}{' '}
      <span>
        {sign}
        {Math.abs(transaction.amount)}€
      </span>
    </li>
  );
};

export default Transaction;
