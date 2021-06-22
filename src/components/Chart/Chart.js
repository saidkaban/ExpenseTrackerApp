import React from "react";

import ChartBar from "./ChartBar";

import './Chart.css'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dp => dp.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMax}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
