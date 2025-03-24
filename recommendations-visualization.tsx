import React from 'react';

type Impact = 'High' | 'Medium' | 'Low';
type Effort = 'High' | 'Medium' | 'Low';

interface Recommendation {
  category: string;
  recommendation: string;
  impact: Impact;
  effort: Effort;
  details: string;
}

const RecommendationsVisualization = () => {
  const recommendations: Recommendation[] = [
    {
      category: "Device Strategy",
      recommendation: "Increase budget allocation for Mobile phones which has the best conversion performance",
      impact: "High",
      effort: "Low",
      details: "Mobile phones deliver 87.5% of conversions with an 8.19% conversion rate at $63.93 per conversion"
    },
    {
      category: "Day Parting",
      recommendation: "Increase bids during hours 7PM, 8PM, 6PM, 9PM, 10AM, 11AM when engagement is highest",
      impact: "High",
      effort: "Medium",
      details: "Evening hours (6-8PM) and late morning (10-11AM) show significantly higher engagement"
    },
    {
      category: "Budget Allocation",
      recommendation: "Focus more budget on Sunday and Wednesday as these days show highest engagement",
      impact: "Medium",
      effort: "Low",
      details: "Sunday (51.9%) and Wednesday (48.1%) account for the vast majority of impressions"
    },
    {
      category: "Keywords",
      recommendation: "Focus on top performing keywords like \"summer daycare near me\" and \"summer program\"",
      impact: "High",
      effort: "Medium",
      details: "These keywords drive significant clicks but could be optimized for better conversion rates"
    },
    {
      category: "Search Terms",
      recommendation: "Add \"summer camps boston\" as exact match keyword based on search performance",
      impact: "Medium",
      effort: "Medium",
      details: "This search term gets the most clicks (8) among user queries but isn't in our keyword list"
    }
  ];

  // Impact color mapping
  const getImpactColor = (impact: Impact): string => {
    switch (impact) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Effort color mapping
  const getEffortColor = (effort: Effort): string => {
    switch (effort) {
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">Campaign Recommendations</h2>
      
      <div className="mb-4 text-sm">
        <div className="flex items-center gap-4 mb-2">
          <div>
            <span className="font-medium mr-2">Impact:</span>
            <span className="inline-flex gap-2">
              <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 border border-red-200">High</span>
              <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 border border-yellow-200">Medium</span>
              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">Low</span>
            </span>
          </div>
          <div>
            <span className="font-medium mr-2">Effort:</span>
            <span className="inline-flex gap-2">
              <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 border border-green-200">Low</span>
              <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 border border-yellow-200">Medium</span>
              <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 border border-red-200">High</span>
            </span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="flex items-center bg-gray-50 p-3 border-b">
              <div className="font-semibold text-gray-800 flex-grow">{rec.category}</div>
              <div className="flex gap-2">
                <span className={`px-2 py-0.5 text-xs font-medium rounded border ${getImpactColor(rec.impact)}`}>
                  Impact: {rec.impact}
                </span>
                <span className={`px-2 py-0.5 text-xs font-medium rounded border ${getEffortColor(rec.effort)}`}>
                  Effort: {rec.effort}
                </span>
              </div>
            </div>
            <div className="p-4">
              <p className="font-medium mb-2">{rec.recommendation}</p>
              <p className="text-sm text-gray-600">{rec.details}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded-lg text-sm">
        <h3 className="font-semibold mb-2">Implementation Strategy:</h3>
        <p className="mb-2">We recommend starting with the high-impact, low-effort changes for immediate gains:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Increase mobile budget allocation by 25-30%</li>
          <li>Adjust day-of-week budgets to focus on Sunday and Wednesday</li>
          <li>Implement dayparting for peak hours (6-8PM, 10-11AM)</li>
          <li>Add missing exact match keywords from top search terms</li>
          <li>Review ad copy to ensure alignment with female audience (81% of users)</li>
        </ol>
      </div>
    </div>
  );
};

export default RecommendationsVisualization;