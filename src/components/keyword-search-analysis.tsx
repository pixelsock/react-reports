import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

interface DataItem {
  name: string;
  clicks: number;
  cost: number;
  cpc: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<any>;
  label?: string;
}

const KeywordSearchAnalysis = () => {
  // Top keywords data
  const keywordData = [
    { name: 'summer daycare near me', clicks: 48, cost: 286.47 },
    { name: 'summer program', clicks: 47, cost: 298.53 },
    { name: 'Boston summer programs', clicks: 18, cost: 138.56 },
    { name: 'summer daycare camps near me', clicks: 18, cost: 96.27 },
    { name: 'Summer programs near me', clicks: 16, cost: 134.83 }
  ];

  // Top search terms data
  const searchTermData = [
    { name: 'summer camps boston', clicks: 8, cost: 60.42 },
    { name: 'free boston summer camps 2025', clicks: 3, cost: 16.26 },
    { name: 'summer programs for kids', clicks: 3, cost: 29.95 },
    { name: 'summer camps near me', clicks: 2, cost: 16.65 },
    { name: 'summer camp near me', clicks: 2, cost: 13.13 }
  ];

  // Calculate cost per click for each item
  const keywordsWithCPC: DataItem[] = keywordData.map(item => ({
    ...item,
    cpc: Number((item.cost / item.clicks).toFixed(2))
  }));

  const searchTermsWithCPC: DataItem[] = searchTermData.map(item => ({
    ...item,
    cpc: Number((item.cost / item.clicks).toFixed(2))
  }));

  // State for active bar
  const [activeKeywordIndex, setActiveKeywordIndex] = useState<number | null>(null);
  const [activeSearchTermIndex, setActiveSearchTermIndex] = useState<number | null>(null);

  // Colors for the bars
  const keywordColors = ['#4285F4', '#5E97F6', '#7BAAF7', '#99BDF9', '#B7D1FA'];
  const cpcColors = ['#34A853', '#46B565', '#58C277', '#6ACF89', '#7CDC9B'];
  const searchTermColors = ['#EA4335', '#EC5F53', '#EF7B71', '#F1978F', '#F4B3AD'];
  const searchTermCpcColors = ['#FBBC05', '#FBC633', '#FCD062', '#FCD990', '#FDE3BF'];

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded text-sm">
          <p className="font-semibold">{data.name}</p>
          <p className="text-blue-600">Clicks: {data.clicks}</p>
          <p className="text-green-600">Cost: ${data.cost.toFixed(2)}</p>
          <p className="text-orange-600">CPC: ${data.cpc.toFixed(2)}</p>
        </div>
      );
    }
    return null;
  };

  // Custom legend
  const renderColorfulLegendText = (value: string) => {
    return (
      <span className="text-xs font-medium">
        {value === 'clicks' ? 'Clicks' : value === 'cpc' ? 'Cost Per Click ($)' : value}
      </span>
    );
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">Keyword & Search Term Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-medium mb-2 text-center">Top Keywords by Clicks</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={keywordsWithCPC}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
              layout="vertical"
              barGap={4}
              barSize={20}
              onMouseMove={(data) => {
                if (data.activeTooltipIndex !== undefined) {
                  setActiveKeywordIndex(data.activeTooltipIndex);
                }
              }}
              onMouseLeave={() => setActiveKeywordIndex(null)}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                type="number" 
                tick={{ fontSize: 12 }} 
                axisLine={{ stroke: '#e0e0e0' }}
                tickLine={{ stroke: '#e0e0e0' }}
              />
              <YAxis 
                type="category" 
                dataKey="name" 
                width={150} 
                tick={{ fontSize: 12 }} 
                axisLine={{ stroke: '#e0e0e0' }}
                tickLine={{ stroke: '#e0e0e0' }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
              <Legend 
                formatter={renderColorfulLegendText} 
                verticalAlign="top" 
                height={36}
              />
              <Bar 
                dataKey="clicks" 
                name="Clicks" 
                radius={[4, 4, 4, 4]}
              >
                {keywordsWithCPC.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={keywordColors[index % keywordColors.length]} 
                    opacity={activeKeywordIndex === null || activeKeywordIndex === index ? 1 : 0.6}
                    stroke="#fff"
                    strokeWidth={1}
                  />
                ))}
              </Bar>
              <Bar 
                dataKey="cpc" 
                name="Cost Per Click ($)" 
                radius={[4, 4, 4, 4]}
              >
                {keywordsWithCPC.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={cpcColors[index % cpcColors.length]} 
                    opacity={activeKeywordIndex === null || activeKeywordIndex === index ? 1 : 0.6}
                    stroke="#fff"
                    strokeWidth={1}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-medium mb-2 text-center">Top Search Terms by Clicks</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={searchTermsWithCPC}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
              layout="vertical"
              barGap={4}
              barSize={20}
              onMouseMove={(data) => {
                if (data.activeTooltipIndex !== undefined) {
                  setActiveSearchTermIndex(data.activeTooltipIndex);
                }
              }}
              onMouseLeave={() => setActiveSearchTermIndex(null)}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                type="number" 
                tick={{ fontSize: 12 }} 
                axisLine={{ stroke: '#e0e0e0' }}
                tickLine={{ stroke: '#e0e0e0' }}
              />
              <YAxis 
                type="category" 
                dataKey="name" 
                width={180} 
                tick={{ fontSize: 12 }} 
                axisLine={{ stroke: '#e0e0e0' }}
                tickLine={{ stroke: '#e0e0e0' }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
              <Legend 
                formatter={renderColorfulLegendText} 
                verticalAlign="top" 
                height={36}
              />
              <Bar 
                dataKey="clicks" 
                name="Clicks" 
                radius={[4, 4, 4, 4]}
              >
                {searchTermsWithCPC.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={searchTermColors[index % searchTermColors.length]} 
                    opacity={activeSearchTermIndex === null || activeSearchTermIndex === index ? 1 : 0.6}
                    stroke="#fff"
                    strokeWidth={1}
                  />
                ))}
              </Bar>
              <Bar 
                dataKey="cpc" 
                name="Cost Per Click ($)" 
                radius={[4, 4, 4, 4]}
              >
                {searchTermsWithCPC.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={searchTermCpcColors[index % searchTermCpcColors.length]} 
                    opacity={activeSearchTermIndex === null || activeSearchTermIndex === index ? 1 : 0.6}
                    stroke="#fff"
                    strokeWidth={1}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded-lg text-sm">
        <h3 className="font-semibold mb-2">Keyword Insights & Recommendations:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Our top keywords focus on "summer daycare" and "summer programs" - these align with our core offerings</li>
          <li>User searches show high interest in "summer camps" and "free" options which aren't fully covered in our keyword strategy</li>
          <li>Add "summer camps boston" as an exact match keyword to capture this high-performing search</li>
          <li>Consider adding "free" as a qualifier to some keywords to capture budget-conscious searchers</li>
          <li>The gap between our keywords and actual search terms suggests we should refine our keyword strategy</li>
        </ul>
      </div>
    </div>
  );
};

export default KeywordSearchAnalysis;