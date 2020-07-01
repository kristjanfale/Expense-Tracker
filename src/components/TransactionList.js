import React, { useContext } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const context = useContext(GlobalContext);
  const { transactions } = context;

  return (
    <div className='transaction'>
      <h3>History</h3>
      <ul className='transaction-list'>
        {/* Map through transactions */}
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
