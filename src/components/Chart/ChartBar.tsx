import React from 'react';
import './ChartBar.css';

export interface Datapoint {
  value: number;
  label: string;
}

interface Props extends Datapoint {
  maxValue: number;
}

const ChartBar: React.FC<Props> = ({ value, maxValue, label }) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100).toString() + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
