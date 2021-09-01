import { useState } from 'react';

import Card from '../UI/Card';
import './styles/Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const changeFilterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilterYear={changeFilterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

/*
{filteredExpenses.length === 0 && <p>No expenses found.</p>}
{filteredExpenses.length > 0 &&
  filteredExpenses.map((element) => (
    <ExpenseItem
      key={element.id}
      date={element.date}
      title={element.title}
      amount={element.amount}
    />
  ))}
*/
