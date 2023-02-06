import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilterChange(+event.target.value);
  };

  return (
    <div className='expense-filter'>
      <div className='expense-filter__control'>
        <label
          className='expense-filter__label'
          htmlFor='expense-filter-select'
        >Filter by year</label>
        <select
          className='expense-filter__select'
          id='expense-filter-select'
          value={props.selected}
          onChange={filterChangeHandler}
        >
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
