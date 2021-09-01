import './styles/ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const saveFilterYearHandler = (event) => {
    props.onChangeFilterYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={saveFilterYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

// 1. listen for the user choice in ExpensesFilter component
// 2. in the end, forward this choice to the Expenses component
// 3. in Expenses component, store it in a state
