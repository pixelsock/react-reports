import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, Sector } from 'recharts';

interface DataItem {
  name: string;
  value: number;
  color: string;
}

interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: DataItem;
  percent: number;
  value: number;
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: DataItem;
  }>;
}

const DemographicsAnalysis = () => {
  const ageData: DataItem[] = [
    { name: '18-24', value: 8.65, color: '#8884d8' },
    { name: '25-34', value: 33.35, color: '#83a6ed' },
    { name: '35-44', value: 38.31, color: '#8dd1e1' },
    { name: '45-54', value: 12.98, color: '#82ca9d' },
    { name: '55-64', value: 3.94, color: '#a4de6c' },
    { name: '65+', value: 2.79, color: '#d0ed57' }
  ];

  const genderData: DataItem[] = [
    { name: 'Female', value: 81.19, color: '#ff8042' },
    { name: 'Male', value: 19.09, color: '#0088fe' }
  ];

  const [activeAgeIndex, setActiveAgeIndex] = useState<number | undefined>(undefined);
  const [activeGenderIndex, setActiveGenderIndex] = useState<number | undefined>(undefined);

  const renderActiveShape = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 6}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        {value >= 5 && (
          <>
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" fontSize={12}>
              {`${payload.name}: ${value.toFixed(1)}%`}
            </text>
          </>
        )}
      </g>
    );
  };

  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded text-xs">
          <p className="font-bold">{payload[0].name}</p>
          <p className="text-gray-700">{`${payload[0].value.toFixed(1)}%`}</p>
        </div>
      );
    }
    return null;
  };

  const renderColorfulLegendText = (value: any, entry: any) => {
    return (
      <span className="text-xs font-medium" style={{ color: entry.color }}>
        {value}: {entry.payload.value.toFixed(1)}%
      </span>
    );
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">Audience Demographics Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-medium mb-2 text-center">Age Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                activeIndex={activeAgeIndex}
                activeShape={renderActiveShape}
                data={ageData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={(_, index) => setActiveAgeIndex(index)}
                onMouseLeave={() => setActiveAgeIndex(undefined)}
                paddingAngle={2}
              >
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="white" strokeWidth={1} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                layout="vertical" 
                verticalAlign="middle" 
                align="right"
                formatter={renderColorfulLegendText}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-medium mb-2 text-center">Gender Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                activeIndex={activeGenderIndex}
                activeShape={renderActiveShape}
                data={genderData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={(_, index) => setActiveGenderIndex(index)}
                onMouseLeave={() => setActiveGenderIndex(undefined)}
                paddingAngle={2}
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="white" strokeWidth={1} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                layout="vertical" 
                verticalAlign="middle" 
                align="right"
                formatter={renderColorfulLegendText}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded-lg text-sm">
        <h3 className="font-semibold mb-2">Demographics Insights:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Our audience is predominantly female (81.2%) compared to male (19.1%)</li>
          <li>Primary age demographic is 25-44 years (71.7% combined)</li>
          <li>The 35-44 age group shows the highest engagement (38.3%)</li>
          <li>Consider creating separate ad groups to target these primary demographics with tailored messaging</li>
          <li>Female-focused messaging around summer childcare solutions may resonate strongly</li>
          <li>Low engagement with 55+ age groups suggests these may be grandparents searching for options</li>
        </ul>
      </div>
    </div>
  );
};

export default DemographicsAnalysis;