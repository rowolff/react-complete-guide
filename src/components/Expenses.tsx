import React from 'react';

import './Expenses.css';

import type { Expense } from '../types';
import ExpenseItem from './ExpenseItem';

interface Props {
  expenses: Expense[];
}

const Expenses: React.FC<Props> = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default Expenses;
