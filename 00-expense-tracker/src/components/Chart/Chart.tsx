import React from 'react';
import './Chart.css';

import ChartBar, { Datapoint } from './ChartBar';

interface Props {
  datapoints: Datapoint[];
}

const Chart: React.FC<Props> = ({ datapoints }) => {
  const totalMaximum = Math.max(
    ...datapoints.map((datapoint) => datapoint.value)
  );

  return (
    <div className="chart">
      {datapoints.map(({ value, label }) => (
        <ChartBar value={value} maxValue={totalMaximum} label={label} key={label} />
      ))}
    </div>
  );
};

export default Chart;
