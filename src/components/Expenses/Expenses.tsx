import React, { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpensesFilter';
import ExpenseItem from './ExpenseItem';

interface Props {
  expenses: Expense[];
}

const Expenses: React.FC<Props> = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState<number | undefined>(
    undefined
  );

  const handleFilterChange = (year: number) => {
    setFilteredYear(year);
  };

  let filteredExpenses: Expense[] = expenses;
  if (filteredYear) {
    filteredExpenses = expenses.filter(
      (expense) => filteredYear === expense.date.getFullYear()
    );
  }

  const filteredExpenseItems = filteredExpenses.map(
    ({ id, date, title, amount }) => (
      <ExpenseItem key={id} date={date} title={title} amount={amount} />
    )
  );

  return (
    <Card classNames={['expenses']}>
      <ExpenseFilter onFilterChange={handleFilterChange} />
      {filteredExpenseItems}
    </Card>
  );
};

export default Expenses;
