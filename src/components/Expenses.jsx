import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './componentStyles/Expenses.css';

function Expenses(props) {
  const expenseItems = props.items;
  return (
    <Card className="expenses">
      {expenseItems.map((element) => (
        <ExpenseItem
          date={element.date}
          title={element.title}
          amount={element.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
