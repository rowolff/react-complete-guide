import React from 'react';

import './ExpensesFilter.css';

interface Props {
  onFilterChange(year: number): void;
}

const ExpensesFilter: React.FC<Props> = ({ onFilterChange }) => {
  const handleFilterSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(Number.parseInt(e.currentTarget.value));
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={handleFilterSelection}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
