import React, { Component } from 'react';

export class Balance extends Component {
  render() {
    return (
      <div className='balance'>
        <h4>My Balance</h4>
        <h1 id='balance'>0.00€</h1>
      </div>
    );
  }
}

export default Balance;
