import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseList from './ExpenseList/ExpenseList';
import './Expenses.css';

const Expenses = (props) => {
  // eslint-disable-next-line
  const [year, setYear] = useState(2022);

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === year
  );

  return (
    <Card className='expenses'>
      ExpenseFilter
      ExpenseChart
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
