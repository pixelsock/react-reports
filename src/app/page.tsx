'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ReportCard {
  id: string;
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  path: string;
}

export default function Home() {
  const reports: ReportCard[] = [
    {
      id: 'summer-campaign-feb22-mar23',
      title: 'Summer Campaign Report',
      description: 'Comprehensive analysis of our Google Ads summer campaign with insights on demographics, keywords, and performance trends.',
      date: 'February 22 - March 23, 2025',
      imageSrc: '/images/summer-campaign.jpg',
      path: '/summer-campaign-feb22-mar23'
    },
    {
      id: 'q1-performance',
      title: 'Q1 Performance Report',
      description: 'Quarterly performance analysis with detailed metrics on conversions, ROI, and channel effectiveness.',
      date: 'January 1 - March 31, 2025',
      imageSrc: '/images/q1-report.jpg',
      path: '/q1-performance'
    },
    {
      id: 'competitor-analysis',
      title: 'Competitor Analysis',
      description: 'In-depth analysis of our top competitors, their strategies, and market positioning.',
      date: 'March 2025',
      imageSrc: '/images/competitor-analysis.jpg',
      path: '/competitor-analysis'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Marketing Reports</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive data visualizations and insights for your marketing campaigns
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report) => (
            <Link href={report.path} key={report.id} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-gray-200 relative">
                  {/* Fallback image if the specified one doesn't exist */}
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-100">
                    <span className="text-blue-500 font-semibold text-xl">{report.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-blue-600 font-semibold mb-2">{report.date}</p>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{report.title}</h3>
                  <p className="text-gray-600 mb-4">{report.description}</p>
                  <div className="flex justify-end">
                    <span className="inline-flex items-center text-blue-600 font-medium">
                      View Report
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">About Our Reports</h2>
          <p className="text-gray-600 mb-4">
            Our interactive marketing reports provide comprehensive insights into campaign performance, audience demographics, and engagement metrics. 
            Each report is designed to help you make data-driven decisions and optimize your marketing strategies.
          </p>
          <p className="text-gray-600">
            The reports are updated regularly with the latest data and include interactive visualizations that allow you to explore the metrics that matter most to your business.
          </p>
        </div>

        <footer className="mt-16 py-6 text-center text-gray-500 text-sm border-t">
          <p> {new Date().getFullYear()} React Reports. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
