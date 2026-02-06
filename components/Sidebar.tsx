import React from 'react';
import { Search } from 'lucide-react';
import { TAGS, AUTHORS } from '../constants';

interface SidebarProps {
  variant?: 'detail' | 'directory';
}

const Sidebar: React.FC<SidebarProps> = ({ variant = 'directory' }) => {
  const isDetail = variant === 'detail';
  
  // Style variations based on the screenshot differences
  const headerClass = isDetail 
    ? "bg-black text-white px-4 py-2 text-sm font-bold mb-0" 
    : "text-lg font-bold mb-4 text-gray-800 px-1";
    
  const containerClass = isDetail
    ? "bg-transparent"
    : "bg-transparent";

  const searchInputClass = isDetail
    ? "w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-gray-400 bg-white"
    : "w-full border border-gray-200 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white";

  const tagListClass = isDetail
    ? "bg-white border-t-0 border border-gray-200 divide-y divide-gray-100"
    : "space-y-2";
    
  const tagItemClass = isDetail
    ? "flex justify-between items-center p-3 text-sm hover:bg-gray-50 cursor-pointer"
    : "flex justify-between items-center text-gray-600 hover:text-green-600 cursor-pointer text-sm px-1 py-1";

  return (
    <div className={`space-y-8 ${containerClass}`}>
      {/* Search Widget */}
      <div className={isDetail ? "" : "bg-white rounded-xl p-0"}>
        {isDetail && <h3 className={headerClass}>Search</h3>}
        <div className="relative">
           {!isDetail && (
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          )}
          <input 
            type="text" 
            placeholder={isDetail ? "Keywords..." : "Search..."} 
            className={searchInputClass}
          />
           {isDetail && (
            <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
          )}
        </div>
      </div>

      {/* Tags Widget */}
      <div className={isDetail ? "" : "bg-white rounded-xl"}>
        <h3 className={headerClass}>Tags</h3>
        <div className={tagListClass}>
          {TAGS.map((tag) => (
            <div key={tag.name} className={tagItemClass}>
              <span>{tag.name}</span>
              <span className="text-gray-400 text-xs">[{tag.count}]</span>
            </div>
          ))}
        </div>
      </div>

      {/* Writers Widget (Directory Only) */}
      {!isDetail && (
        <div className="bg-white rounded-xl px-1">
          <h3 className={headerClass}>Writers</h3>
          <div className="space-y-4">
            {Object.values(AUTHORS).map((author, index) => (
              <div key={index} className="flex items-center gap-3">
                <img 
                  src={author.avatar} 
                  alt={author.name} 
                  className="w-8 h-8 rounded-full bg-gray-200"
                />
                <span className="text-sm font-medium text-gray-700">{author.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
