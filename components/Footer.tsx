import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} jeki Data-Driven Lab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
