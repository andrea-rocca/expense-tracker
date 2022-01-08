import React, {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ( props ) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    return  <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem  
                    title={props.items[0].title} 
                    date={props.items[0].date} 
                    amount={props.items[0].amount}/>
                <ExpenseItem  
                    title={props.items[1].title} 
                    date={props.items[1].date} 
                    amount={props.items[1].amount}/>
            </Card>
};

export default Expenses;