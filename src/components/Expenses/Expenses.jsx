import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './styles/Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const expenseItems = props.items;

  const changeFilterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(filterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilterYear={changeFilterYearHandler}
        />
        {expenseItems.map((element) => (
          <ExpenseItem
            key={element.id}
            date={element.date}
            title={element.title}
            amount={element.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
