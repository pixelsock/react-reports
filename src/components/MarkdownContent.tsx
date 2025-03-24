import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
  filePath: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ filePath }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading markdown content:', error);
        setContent(`# Unable to load content\n\nPlease check the file path: ${filePath}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdown();
  }, [filePath]);

  if (isLoading) {
    return <div className="animate-pulse h-40 bg-gray-100 rounded-md"></div>;
  }

  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
