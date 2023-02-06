import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseList from './ExpenseList/ExpenseList';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpenseChart from './ExpenseChart/ExpenseChart';
import './Expenses.css';

const Expenses = (props) => {
  const [year, setYear] = useState(2022);

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === year
  );

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={year}
        onFilterChange={filterChangeHandler}
       />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
