import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <p className='new-expense__control'>
          <label htmlFor='new-expense-title'>Title</label>
          <input
            id='new-expense-title'
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
           />
        </p>
        <p className='new-expense__control'>
          <label htmlFor='new-expense-amount'>Amount</label>
          <input
            id='new-expense-amount'
            type='number'
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
           />
        </p>
        <p className='new-expense__control'>
          <label htmlFor='new-expense-date'>Date</label>
          <input
            id='new-expense-date'
            type='date'
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
           />
        </p>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        <button type='button' onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
