import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface WeeklyData {
  week: string;
  weekNum: number;
  dateRange: string;
  clicks: number;
  conversions: number;
  convRate: number;
  costPerConv: number;
}

interface WeeklyChanges {
  week: string;
  weekNum: number;
  clicksChange: number;
  conversionsChange: number;
  convRateChange: number;
  cpcChange: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

interface ChangesTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const PerformanceTrendsChart = () => {
  // Weekly performance data
  const weeklyData: WeeklyData[] = [
    { 
      week: 'Week 1', 
      weekNum: 1,
      dateRange: 'Feb 22 - Mar 1',
      clicks: 62, 
      conversions: 4,
      convRate: 6.45,
      costPerConv: 7.01
    },
    { 
      week: 'Week 2', 
      weekNum: 2,
      dateRange: 'Mar 2 - Mar 9',
      clicks: 94, 
      conversions: 2,
      convRate: 2.13,
      costPerConv: 3.67
    },
    { 
      week: 'Week 3', 
      weekNum: 3,
      dateRange: 'Mar 10 - Mar 17',
      clicks: 64, 
      conversions: 8,
      convRate: 12.50,
      costPerConv: 6.64
    },
    { 
      week: 'Week 4', 
      weekNum: 4,
      dateRange: 'Mar 18 - Mar 23',
      clicks: 48, 
      conversions: 2,
      convRate: 4.17,
      costPerConv: 3.82
    }
  ];
  
  // Weekly changes data
  const weeklyChanges: WeeklyChanges[] = [
    { 
      week: 'Week 2', 
      weekNum: 2,
      clicksChange: 51.61,
      conversionsChange: -50.00,
      convRateChange: -67.02,
      cpcChange: -47.64
    },
    { 
      week: 'Week 3', 
      weekNum: 3,
      clicksChange: -31.91,
      conversionsChange: 300.00,
      convRateChange: 487.50,
      cpcChange: 81.05
    },
    { 
      week: 'Week 4', 
      weekNum: 4,
      clicksChange: -25.00,
      conversionsChange: -75.00,
      convRateChange: -66.67,
      cpcChange: -42.44
    }
  ];

  // Custom tooltip for weekly data
  const CustomTooltip = ({ 
    active, 
    payload, 
    label 
  }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as WeeklyData;
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded">
          <p className="font-bold text-sm">{data.week} ({data.dateRange})</p>
          <p className="text-sm text-blue-600">Clicks: {data.clicks}</p>
          <p className="text-sm text-green-600">Conversions: {data.conversions}</p>
          <p className="text-sm text-purple-600">Conv. Rate: {data.convRate.toFixed(2)}%</p>
          <p className="text-sm text-orange-600">Cost per Conv: ${data.costPerConv.toFixed(2)}</p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for weekly changes
  const ChangesTooltip = ({ 
    active, 
    payload, 
    label 
  }: ChangesTooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as WeeklyChanges;
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded">
          <p className="font-bold text-sm">{data.week} (Week-over-Week)</p>
          <p className="text-sm" style={{ color: data.clicksChange >= 0 ? 'green' : 'red' }}>
            Clicks: {data.clicksChange >= 0 ? '+' : ''}{data.clicksChange.toFixed(2)}%
          </p>
          <p className="text-sm" style={{ color: data.conversionsChange >= 0 ? 'green' : 'red' }}>
            Conversions: {data.conversionsChange >= 0 ? '+' : ''}{data.conversionsChange.toFixed(2)}%
          </p>
          <p className="text-sm" style={{ color: data.convRateChange >= 0 ? 'green' : 'red' }}>
            Conv. Rate: {data.convRateChange >= 0 ? '+' : ''}{data.convRateChange.toFixed(2)}%
          </p>
          <p className="text-sm" style={{ color: data.cpcChange <= 0 ? 'green' : 'red' }}>
            Cost per Conv: {data.cpcChange >= 0 ? '+' : ''}{data.cpcChange.toFixed(2)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">Weekly Performance Trends</h2>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-medium mb-2 text-center">Weekly Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={weeklyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip content={<CustomTooltip active={false} payload={[]} label="" />} />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#8884d8" name="Clicks" />
              <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#82ca9d" name="Conversions" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-medium mb-2 text-center">Weekly Conversion Rate & Cost per Conversion</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={weeklyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip content={<CustomTooltip active={false} payload={[]} label="" />} />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="convRate" stroke="#ff7300" name="Conv. Rate (%)" />
              <Line yAxisId="right" type="monotone" dataKey="costPerConv" stroke="#0088fe" name="Cost per Conv. ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-medium mb-2 text-center">Week-over-Week Changes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={weeklyChanges}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis tickFormatter={(value) => `${value}%`} />
              <Tooltip content={<ChangesTooltip active={false} payload={[]} label="" />} />
              <Legend />
              <Bar dataKey="clicksChange" fill="#8884d8" name="Clicks Change %" />
              <Bar dataKey="conversionsChange" fill="#82ca9d" name="Conversions Change %" />
              <Bar dataKey="convRateChange" fill="#ff7300" name="Conv. Rate Change %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded-lg text-sm">
        <h3 className="font-semibold mb-2">Weekly Performance Insights:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Week 3 (Mar 10-17) was our strongest performing week with 8 conversions and a 12.5% conversion rate</li>
          <li>Week 2 had the highest click volume (94) but the lowest conversion rate (2.13%)</li>
          <li>We saw significant improvement in Week 3 with conversion rate increasing by nearly 5x compared to Week 2</li>
          <li>Week 4 showed declining performance across all metrics compared to Week 3</li>
          <li>Analyzing what changes were made before Week 3 could help identify successful optimizations</li>
          <li>Consider replicating Week 3 targeting and bidding strategies in future campaigns</li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceTrendsChart;