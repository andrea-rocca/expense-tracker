import React, { Component } from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Card from './components/UI/Card';

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

    return (
      <Card className="App expenses">
          <h2>EXP TRACKER</h2>
          <ExpenseItem 
              title={expenses[0].title} 
              amount={expenses[0].amount} 
              date={expenses[0].date}>
          </ExpenseItem>
          <ExpenseItem 
              title={expenses[1].title} 
              amount={expenses[1].amount} 
              date={expenses[1].date}>
          </ExpenseItem>
      </Card>
    );
  }
}


export default App;
