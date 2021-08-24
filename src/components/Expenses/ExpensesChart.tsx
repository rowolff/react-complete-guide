import React from 'react';

import Chart from '../Chart/Chart';
import { Datapoint } from '../Chart/ChartBar';

interface Props {
  expenses: Expense[];
}

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const ExpensesChart: React.FC<Props> = ({ expenses }) => {
  const chartDataPoints: Datapoint[] = MONTHS.map((month) => ({
    label: month,
    value: 0,
  }));

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart datapoints={chartDataPoints} />;
};

export default ExpensesChart;
