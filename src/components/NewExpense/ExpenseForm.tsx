import React, { useState } from 'react';

import './ExpenseForm.css';

interface Props {
  onSaveExpenseData(data: ExpenseInputData): void;
  onCancel(): void;
}

const ExpenseForm: React.FC<Props> = ({ onSaveExpenseData, onCancel }) => {
  const [title, setTitle] = useState<string>('');
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const [amount, setAmount] = useState<number>(0.0);
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number.parseFloat(e.currentTarget.value));
  };

  const [date, setDate] = useState<Date>(new Date());
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.currentTarget.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const expenseInputData: ExpenseInputData = {
      title,
      amount,
      date,
    };
    onSaveExpenseData(expenseInputData);
    setTitle('');
    setAmount(0.0);
    setDate(new Date());
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} onReset={onCancel}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitleChange} value={title} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
            value={amount}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChange}
            value={date.toISOString().split('T')[0]}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
