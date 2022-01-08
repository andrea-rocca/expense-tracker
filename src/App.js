import React, { Component } from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

class App extends Component {

  render() {

    const expenses = [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 4.5,
        date: new Date(2021,2,28)
      },
      {
        id: 'e2',
        title: 'New TV',
        amount: 120,
        date: new Date(2021,6,26)
      },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021,2,28)
      },
      {
        id: 'e4',
        title: 'New Desk',
        amount: 450,
        date: new Date(2021,2,28)
      }
    ];

    const addExpenseHandler = (expense) => {
        console.log( expense );
    };

    return (
      <div className="App">
        <h2>EXPENSES TRACKER</h2>
        <NewExpense onExpenseAdded={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    );
  }
}


export default App;
