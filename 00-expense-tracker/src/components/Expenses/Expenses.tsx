import React, { useState } from 'react';

import './Expenses.css';

import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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

  return (
    <li>
      <Card classNames={['expenses']}>
        <ExpenseFilter
          onFilterChange={handleFilterChange}
          value={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
