import React from 'react';

import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

interface Props {
  items: Expense[];
}

const ExpensesList: React.FC<Props> = ({ items }) => {
  if (items.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;

  const expenseItems = items
    .sort((ex1, ex2) => (ex1.date < ex2.date ? 1 : -1))
    .map(({ id, date, title, amount }) => (
      <ExpenseItem key={id} date={date} title={title} amount={amount} />
    ));

  return <ul className="expenses-list">{expenseItems}</ul>;
};

export default ExpensesList;
