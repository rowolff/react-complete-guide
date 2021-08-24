import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

interface Props {
  onSaveNewExpense(expense: Expense): void;
}

const NewExpense: React.FC<Props> = ({ onSaveNewExpense }) => {
  const [formVisible, setFormVisible] = useState<boolean>(false);

  const handleSaveExpenseData = (expenseData: ExpenseInputData) => {
    const newExpense: Expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    onSaveNewExpense(newExpense);
  };

  const handleAddNewExpense = () => {
    setFormVisible(true);
  };

  const handleCancel = () => {
    setFormVisible(false);
  };

  return (
    <div className="new-expense">
      {formVisible && (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleCancel}
        />
      )}
      {!formVisible && (
        <button onClick={handleAddNewExpense}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
