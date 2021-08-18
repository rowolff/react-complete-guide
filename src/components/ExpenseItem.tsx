import React from 'react';

import './ExpenseItem.css';

interface Props {
  id: string;
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem: React.FC<Props> = ({ id, date, title, amount }) => {
  return (
    <div key={id} className="expense-item">
      <div>{date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
