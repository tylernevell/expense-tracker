import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './styles/NewExpense.css';

const NewExpense = (props) => {
  const [isEditingBool, setIsEditingBool] = useState(false);

  const isEditingBoolHandler = () => {
    setIsEditingBool(true);
  };

  const stopEditingHandler = () => {
    setIsEditingBool(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditingBool(false);
  };

  return (
    <div className="new-expense">
      {!isEditingBool && (
        <button onClick={isEditingBoolHandler}>Add New Expense</button>
      )}
      {isEditingBool && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
