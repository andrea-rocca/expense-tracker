import React, { Component, useState } from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
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
  },
  {
    id: 'e5',
    title: 'Screwdriver',
    amount: 7,
    date: new Date(2020,1,12)
  }
];

/*
class App extends Component {
  
  render() {
    
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    
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
*/

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    
  const addExpenseHandler = (expense) => {
    console.log( expense );
    /*
    const new_exps = expenses.slice();
    new_exps.push( expense );
    setExpenses( new_exps );
    */

    // setExpenses( [expense, ...expenses] );

    setExpenses( (prevExpenses)=>{
      return [expense, ...prevExpenses];
    } );
  };

  return (
    <div className="App">
      <h2>EXPENSES TRACKER</h2>
      <NewExpense onExpenseAdded={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};


export default App;
