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

export default function SummerCampaignReport() {
  return (
    <div className="embed-container">
      <div className="space-y-8">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">Summer Campaign Report</h1>
          <p className="text-gray-600">Period: February 22 - March 23, 2025</p>
        </header>
        
        {/* Campaign Report Intro - Directly integrated */}
        <div className="mb-8 bg-white rounded-lg p-4">
          <div className="prose prose-sm max-w-none">
            <h2>📊 Campaign Performance Overview</h2>
            
            <p>I dove deep into our Google Ads data from the past month, and I'm seeing some clear patterns we can leverage. We've generated 268 clicks and 16 conversions at a total cost of $1,278.25. Our overall conversion rate stands at 5.97%, with an average cost per conversion of $79.89 - not bad, but definitely room for improvement.</p>
            
            <p>Mobile is our powerhouse, driving a whopping 87.5% of all conversions despite only accounting for 70% of our spend. That's a signal we can't ignore. Sunday and Wednesday are our engagement hotspots, and evenings (6-8 PM) consistently deliver our best performance, with a secondary bump during the late morning (10-11 AM).</p>
            
            <p>The data is telling us a story - we've got solid foundations but several quick dial turns could immediately move the needle. Let's feed what's working and cut what's not.</p>
            
            <h2>🚀 Key Takeaways & Next Steps</h2>
            
            <ul>
              <li><strong>Mobile-first strategy:</strong> Let's shift at least 25-30% more budget toward mobile campaigns. With an 8.19% conversion rate on mobile vs. 3.28% on desktop, and a much lower cost per conversion ($63.93 vs. $188.66), this is our biggest opportunity.</li>
              
              <li><strong>Day & time optimization:</strong> Increase bids by 20-30% on Sundays and Wednesdays, particularly during the 6-8 PM window and that 10-11 AM timeframe. We should be aggressive when our audience is most engaged.</li>
              
              <li><strong>Keyword refinement:</strong> Our data shows "summer daycare near me" and "summer program" are carrying the weight, but there's a gap between our keywords and what people are actually searching. Let's add "summer camps boston" as an exact match keyword and other missing terms from our top searches.</li>
              
              <li><strong>Audience focus:</strong> We're hitting the right demographic - primarily parents in their prime working years (25-44), with a strong female skew (81.19%). Let's tailor our messaging specifically to this audience segment.</li>
              
              <li><strong>Weekly testing cycle:</strong> I'd recommend testing 2-3 new ad variations, implementing the device/timing adjustments, and tracking weekly. Cut what underperforms fast, double down on winners.</li>
            </ul>
          </div>
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
