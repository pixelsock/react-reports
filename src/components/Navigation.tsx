import React from 'react';

type SectionName = 'Dashboard' | 'Performance' | 'Keywords' | 'Recommendations';

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

export default Navigation;
