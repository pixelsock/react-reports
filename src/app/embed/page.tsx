import React from 'react';
import RecommendationsVisualization from '@/components/recommendations-visualization';

export default function EmbedPage() {
  return (
    <div className="embed-container p-2">
      <h1 className="text-xl font-bold mb-4">Campaign Recommendations</h1>
      <RecommendationsVisualization />
    </div>
  );
}
