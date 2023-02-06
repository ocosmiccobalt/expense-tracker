import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expense-list__fallback'>Found no expenses</h2>;
  }

  const expenses = props.items.map((expense) => (
    <li key={expense.id}>
      <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    </li>
  ));

  return (
    <ul className='expense-list'>
      {expenses}
    </ul>
  );
};

export default ExpenseList;
