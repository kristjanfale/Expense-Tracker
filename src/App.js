import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transaction from './components/Transaction';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Balance />
      <IncomeExpense />
      <Transaction />
    </div>
  );
}

export default App;
