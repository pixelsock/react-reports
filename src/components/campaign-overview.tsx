import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';

interface TimeSeriesDataItem {
  date: string;
  clicks: number;
  conversions: number;
}

interface NetworkDataItem {
  name: string;
  value: number;
  cost: number;
  percent: number;
  color: string;
}

interface DeviceDataItem {
  name: string;
  value: number;
  conversions: number;
  percent: number;
  color: string;
}

interface MetricItem {
  name: string;
  value: string | number;
}

interface TimeSeriesToolTipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
  }>;
  label?: string;
}

interface PieToolTipProps {
  active?: boolean;
  payload?: Array<{
    payload: NetworkDataItem | DeviceDataItem;
  }>;
}

const CampaignOverview = () => {
  // Time series data for daily clicks and conversions
  const timeSeriesData: TimeSeriesDataItem[] = [
    { date: 'Feb 22', clicks: 9, conversions: 2 },
    { date: 'Feb 23', clicks: 9, conversions: 0 },
    { date: 'Feb 24', clicks: 4, conversions: 0 },
    { date: 'Feb 25', clicks: 5, conversions: 0 },
    { date: 'Feb 26', clicks: 8, conversions: 0 },
    { date: 'Feb 27', clicks: 9, conversions: 2 },
    { date: 'Feb 28', clicks: 6, conversions: 0 },
    { date: 'Mar 1', clicks: 12, conversions: 0 },
    { date: 'Mar 2', clicks: 13, conversions: 0 },
    { date: 'Mar 3', clicks: 7, conversions: 0 },
    { date: 'Mar 4', clicks: 11, conversions: 0 },
    { date: 'Mar 5', clicks: 15, conversions: 0 },
    { date: 'Mar 6', clicks: 16, conversions: 1 },
    { date: 'Mar 7', clicks: 17, conversions: 1 },
    { date: 'Mar 8', clicks: 15, conversions: 0 },
    { date: 'Mar 9', clicks: 0, conversions: 0 },
    { date: 'Mar 10', clicks: 7, conversions: 1 },
    { date: 'Mar 11', clicks: 8, conversions: 1 },
    { date: 'Mar 12', clicks: 9, conversions: 2 },
    { date: 'Mar 13', clicks: 10, conversions: 1 },
    { date: 'Mar 14', clicks: 11, conversions: 1 },
    { date: 'Mar 15', clicks: 10, conversions: 1 },
    { date: 'Mar 16', clicks: 9, conversions: 1 },
    { date: 'Mar 17', clicks: 0, conversions: 0 },
    { date: 'Mar 18', clicks: 11, conversions: 0 },
    { date: 'Mar 19', clicks: 9, conversions: 0 },
    { date: 'Mar 20', clicks: 8, conversions: 1 },
    { date: 'Mar 21', clicks: 7, conversions: 0 },
    { date: 'Mar 22', clicks: 5, conversions: 1 },
    { date: 'Mar 23', clicks: 8, conversions: 0 }
  ];
  
  // Network breakdown
  const networkData: NetworkDataItem[] = [
    { name: 'Google Search', value: 196, cost: 1168.42, percent: 73.1, color: '#4285F4' },
    { name: 'Display Network', value: 65, cost: 13.64, percent: 24.3, color: '#34A853' },
    { name: 'Search Partners', value: 7, cost: 96.78, percent: 2.6, color: '#FBBC05' }
  ];
  
  // Device breakdown
  const deviceData: DeviceDataItem[] = [
    { name: 'Mobile', value: 171, conversions: 14, percent: 63.8, color: '#EA4335' },
    { name: 'Desktop', value: 61, conversions: 2, percent: 22.8, color: '#4285F4' },
    { name: 'Tablet', value: 34, conversions: 0, percent: 12.7, color: '#34A853' },
    { name: 'TV Screens', value: 0, conversions: 0, percent: 0, color: '#FBBC05' }
  ];
  
  // Overall metrics  
  const overallMetrics: MetricItem[] = [
    { name: 'Total Clicks', value: 268 },
    { name: 'Total Conversions', value: 16 },
    { name: 'Conversion Rate', value: '5.97%' },
    { name: 'Total Cost', value: '$1,278.25' },
    { name: 'Cost per Click', value: '$4.77' },
    { name: 'Cost per Conversion', value: '$79.89' }
  ];
  
  // State for active pie chart segments
  const [activeNetworkIndex, setActiveNetworkIndex] = useState<number | undefined>(undefined);
  const [activeDeviceIndex, setActiveDeviceIndex] = useState<number | undefined>(undefined);
  
  // Custom tooltip for time series
  const CustomTooltip = ({ active, payload, label }: TimeSeriesToolTipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow rounded">
          <p className="font-semibold">{label}</p>
          <p className="text-sm text-blue-600">Clicks: {payload[0].value}</p>
          <p className="text-sm text-green-600">Conversions: {payload[1].value}</p>
        </div>
      );
    }
    return null;
  };
  
  // Custom tooltip for pie charts
  const PieCustomTooltip = ({ active, payload }: PieToolTipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded text-sm">
          <p className="font-semibold" style={{ color: data.color }}>{data.name}</p>
          <p>Clicks: {data.value}</p>
          <p>Percentage: {data.percent}%</p>
          {('cost' in data) && <p>Cost: ${data.cost.toFixed(2)}</p>}
          {('conversions' in data) && <p>Conversions: {data.conversions}</p>}
        </div>
      );
    }
    return null;
  };
  
  // Render active shape with animation
  const renderActiveShape = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
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
        {payload.percent >= 2 && (
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
              {`${payload.name}: ${payload.percent}%`}
            </text>
          </>
        )}
      </g>
    );
  };

  // Custom legend
  const renderColorfulLegendText = (value: any, entry: any) => {
    const { payload } = entry;
    return (
      <span className="text-xs font-medium" style={{ color: entry.color }}>
        {value}: {payload.percent}%
      </span>
    );
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6 text-center">Google Ads Campaign Performance</h2>
      <p className="text-center text-sm mb-4 text-gray-500">February 22 - March 23, 2025</p>
      
      {/* Metrics cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {overallMetrics.map((metric, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded shadow-sm">
            <p className="text-sm text-gray-600">{metric.name}</p>
            <p className="text-xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>
      
      {/* Daily performance chart */}
      <div className="bg-gray-50 p-4 rounded mb-6">
        <h3 className="text-lg font-medium mb-2">Daily Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={timeSeriesData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#8884d8" activeDot={{ r: 8 }} name="Clicks" />
            <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#82ca9d" name="Conversions" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Network and device distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-medium mb-2 text-center">Network Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                activeIndex={activeNetworkIndex}
                activeShape={renderActiveShape}
                data={networkData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={(_, index) => setActiveNetworkIndex(index)}
                onMouseLeave={() => setActiveNetworkIndex(undefined)}
                paddingAngle={2}
              >
                {networkData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="white" strokeWidth={1} />
                ))}
              </Pie>
              <Tooltip content={<PieCustomTooltip />} />
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
          <h3 className="text-lg font-medium mb-2 text-center">Device Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                activeIndex={activeDeviceIndex}
                activeShape={renderActiveShape}
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={(_, index) => setActiveDeviceIndex(index)}
                onMouseLeave={() => setActiveDeviceIndex(undefined)}
                paddingAngle={2}
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="white" strokeWidth={1} />
                ))}
              </Pie>
              <Tooltip content={<PieCustomTooltip />} />
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
      
      <div className="bg-blue-50 p-4 rounded-lg text-sm">
        <h3 className="font-semibold mb-2">Executive Summary:</h3>
        <p>Our Google Ads campaign delivered 268 clicks and 16 conversions at a 5.97% conversion rate and $79.89 cost per conversion. Mobile devices were our strongest channel, delivering 87.5% of conversions despite accounting for only 63.8% of our clicks. We saw our best performance in Week 3 (Mar 10-17) with 8 conversions at a 12.5% conversion rate.</p>
        <p className="mt-2">The data shows clear patterns of higher engagement on Sundays and Wednesdays, especially during evening hours (6-8PM). Our primary audience is women aged 25-44, suggesting we should focus our messaging on parents seeking summer programs for their children.</p>
      </div>
    </div>
  );
};

export default CampaignOverview;