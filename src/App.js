import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Paper Towels',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: 'e2',
    title: 'New Laptop',
    amount: 799.49,
    date: new Date(2022, 2, 12)
  },
  {
    id: 'e3',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e4',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 1, 28),
  },
];

const App = () => {
  return (
    <div>
      <h1 className='visually-hidden'>Expenses</h1>
      New Expense
      <Expenses items={DUMMY_EXPENSES} />
    </div>
  );
};

export default App;
