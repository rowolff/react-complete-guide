import React from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

interface Props {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem: React.FC<Props> = ({ date, title, amount }) => {
  return (
    <Card classNames={['expense-item']}>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
