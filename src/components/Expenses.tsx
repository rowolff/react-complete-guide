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
      {expenses.map(({id, date, title, amount}) => (
        <ExpenseItem
          key={id}
          date={date}
          title={title}
          amount={amount}
        />
      ))}
    </div>
  );
};

export default Expenses;
