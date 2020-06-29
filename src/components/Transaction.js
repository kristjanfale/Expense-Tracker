import React, { Component } from 'react';

export class Transaction extends Component {
  render() {
    return (
      <div className='transaction'>
        <h3>History</h3>
        <ul className='transaction-list'>
          <li className='transaction-item'>
            Item 1 <span>-300€</span>
          </li>
          <li className='transaction-item'>
            Item 2 <span>-40€</span>
          </li>
          <li className='transaction-item'>
            Item 3 <span>500€</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Transaction;
