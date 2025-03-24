'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import './embed.css';

// Dynamically import the user's components
const RecommendationsVisualization = dynamic(
  () => import('../../../recommendations-visualization'),
  { ssr: false }
);
const CampaignOverview = dynamic(
  () => import('@/components/campaign-overview'),
  { ssr: false }
);
const DemographicsAnalysis = dynamic(
  () => import('@/components/demographics-analysis'),
  { ssr: false }
);
const KeywordSearchAnalysis = dynamic(
  () => import('@/components/keyword-search-analysis'),
  { ssr: false }
);
const PerformanceTrendsChart = dynamic(
  () => import('@/components/performance-trends'),
  { ssr: false }
);
const MarkdownContent = dynamic(
  () => import('@/components/MarkdownContent'),
  { ssr: false }
);

export default function SummerCampaignReport() {
  return (
    <div className="embed-container">
      <div className="space-y-8">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">Summer Campaign Report</h1>
          <p className="text-gray-600">Period: February 22 - March 23, 2025</p>
        </header>
        
        {/* Markdown Content */}
        <div className="mb-8 bg-white rounded-lg">
          <MarkdownContent filePath="/content/campaign-report-intro.md" />
        </div>
        
        <div className="space-y-8">
          {/* Overview Section */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Campaign Overview</h2>
            <CampaignOverview />
          </section>
          
          {/* Demographics Section */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Demographics</h2>
            <DemographicsAnalysis />
          </section>
          
          {/* Keywords Section */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Keyword Analysis</h2>
            <KeywordSearchAnalysis />
          </section>
          
          {/* Performance Section */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Performance Trends</h2>
            <PerformanceTrendsChart />
          </section>
          
          {/* Recommendations Section */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Recommendations</h2>
            <RecommendationsVisualization />
          </section>
        </div>
      </div>
    </div>
  );
}
