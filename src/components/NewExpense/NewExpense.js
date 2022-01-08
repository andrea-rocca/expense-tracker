import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = ( props ) => {

    const [addForm, addFormToggle] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            title: enteredExpenseData.enteredTitle,
            date: enteredExpenseData.enteredDate,
            amount: +enteredExpenseData.enteredAmount,
            id: Math.random().toString()
        };
        props.onExpenseAdded( expenseData );
        setFormHidden();
    };

    const setFormVisible = () => {
        addFormToggle(true);
    };

    const setFormHidden = () => {
        addFormToggle(false);
    };

    return  <div className="new-expense">
                {
                    addForm ? 
                    <ExpenseForm 
                        onCancel={setFormHidden}
                        onSaveExpenseData={saveExpenseDataHandler}/> :
                    <button onClick={setFormVisible}>Add New Expense</button>
                }
            </div>
};

export default NewExpense;