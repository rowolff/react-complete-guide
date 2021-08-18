import React from 'react';

import './Expenses.css';

import type { Expense } from '../../types';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

interface Props {
  expenses: Expense[];
}

const Expenses: React.FC<Props> = ({ expenses }) => {
  return (
    <Card classNames={['expenses']}>
      {expenses.map(({ id, date, title, amount }) => (
        <ExpenseItem key={id} date={date} title={title} amount={amount} />
      ))}
    </Card>
  );
};

export default Expenses;
