'use client';

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

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

type SectionName = 'Overview' | 'Demographics' | 'Keywords' | 'Performance' | 'Recommendations';

// Navigation component
interface NavigationProps {
  sections: SectionName[];
  activeSection: SectionName;
  onSectionChange: (section: SectionName) => void;
}

const Navigation: React.FC<NavigationProps> = ({ sections, activeSection, onSectionChange }) => {
  return (
    <div className="bg-white shadow-sm mb-6 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-8 overflow-x-auto py-3 no-scrollbar">
          {sections.map((section) => (
            <button
              key={section}
              className={`whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === section
                  ? 'bg-blue-100 text-blue-800'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => onSectionChange(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function SummerCampaignReport() {
  const sections: SectionName[] = ['Overview', 'Demographics', 'Keywords', 'Performance', 'Recommendations'];
  const [activeSection, setActiveSection] = useState<SectionName>(sections[0]);
  
  // Refs for each section
  const sectionRefs = {
    Overview: useRef<HTMLDivElement>(null),
    Demographics: useRef<HTMLDivElement>(null),
    Keywords: useRef<HTMLDivElement>(null),
    Performance: useRef<HTMLDivElement>(null),
    Recommendations: useRef<HTMLDivElement>(null),
  };
  
  // Handle section change
  const handleSectionChange = (section: SectionName) => {
    setActiveSection(section);
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Intersection Observer to update active section based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionName;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    sections.forEach((section) => {
      if (sectionRefs[section].current) {
        observer.observe(sectionRefs[section].current!);
      }
    });
    
    return () => {
      sections.forEach((section) => {
        if (sectionRefs[section].current) {
          observer.unobserve(sectionRefs[section].current!);
        }
      });
    };
  }, []);

  return (
    <>
      <Navigation 
        sections={sections} 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Summer Campaign Report</h1>
          <p className="text-gray-600 font-bold">Period: February 22 - March 23, 2025</p>
        </header>
        
        {/* Markdown Content */}
        <div className="mb-12 bg-white p-8 rounded-lg shadow">
          <MarkdownContent filePath="/content/campaign-report-intro.md" />
        </div>
        
        <div className="space-y-12">
          {/* Overview Section */}
          <section id="Overview" ref={sectionRefs.Overview} className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Campaign Overview</h2>
            <CampaignOverview />
          </section>
          
          {/* Demographics Section */}
          <section id="Demographics" ref={sectionRefs.Demographics} className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Demographics</h2>
            <DemographicsAnalysis />
          </section>
          
          {/* Keywords Section */}
          <section id="Keywords" ref={sectionRefs.Keywords} className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Keyword Analysis</h2>
            <KeywordSearchAnalysis />
          </section>
          
          {/* Performance Section */}
          <section id="Performance" ref={sectionRefs.Performance} className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Performance Trends</h2>
            <PerformanceTrendsChart />
          </section>
          
          {/* Recommendations Section */}
          <section id="Recommendations" ref={sectionRefs.Recommendations} className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Recommendations</h2>
            <RecommendationsVisualization />
          </section>
        </div>
        
        <footer className="mt-16 py-6 text-center text-gray-500 text-sm border-t">
          <p>© {new Date().getFullYear()} React Reports. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
