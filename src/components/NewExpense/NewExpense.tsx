import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

interface Props {
  onSaveNewExpense(expense: Expense): void;
}

const NewExpense: React.FC<Props> = ({ onSaveNewExpense }) => {
  const handleSaveExpenseData = (expenseData: ExpenseInputData) => {
    const newExpense: Expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    onSaveNewExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </div>
  );
};

export default NewExpense;
