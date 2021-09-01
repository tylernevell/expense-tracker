import ExpenseItem from './ExpenseItem';
import './styles/ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((element) => (
        <ExpenseItem
          key={element.id}
          date={element.date}
          title={element.title}
          amount={element.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
