// components/RoiGraph.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  yearlySavings: number;
  years?: number;
}

const RoiGraph: React.FC<Props> = ({ yearlySavings, years = 10 }) => {
  const data = Array.from({ length: years }, (_, i) => ({    year: i + 1,
    savings: (i + 1) * yearlySavings,
  }));

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="year" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="savings"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RoiGraph;