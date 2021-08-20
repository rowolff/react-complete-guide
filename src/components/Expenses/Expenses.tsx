import React, { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpensesFilter';
import ExpenseItem from './ExpenseItem';

interface Props {
  expenses: Expense[];
}

const Expenses: React.FC<Props> = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState<number>(
    new Date().getFullYear()
  );

  const handleFilterChange = (year: number) => {
    setFilteredYear(year);
  };

  const filteredExpenses: Expense[] = expenses.filter(
    (expense) => filteredYear === expense.date.getFullYear()
  );

  const filteredExpenseItems = filteredExpenses
    .sort((ex1, ex2) => (ex1.date < ex2.date ? 1 : -1))
    .map(({ id, date, title, amount }) => (
      <ExpenseItem key={id} date={date} title={title} amount={amount} />
    ));

  return (
    <Card classNames={['expenses']}>
      <ExpenseFilter onFilterChange={handleFilterChange} value={filteredYear} />
      {filteredExpenseItems}
    </Card>
  );
};

export default Expenses;
