import React from 'react';
import { Search } from 'lucide-react';
import { TAGS, AUTHORS } from '../constants';

interface SidebarProps {
  variant?: 'detail' | 'directory';
}

const Sidebar: React.FC<SidebarProps> = ({ variant = 'directory' }) => {
  const isDetail = variant === 'detail';

  // Design from Figure 1: Black headers, sharp corners, boxed items
  const headerClass = "bg-[#000000] text-white px-5 py-3 text-[15px] font-bold tracking-wider uppercase";
  const widgetClass = "bg-[#F5F5F5] border border-gray-100 overflow-hidden";
  const itemClass = "flex justify-between items-center px-5 py-3 text-[14px] bg-white border-b border-[#F0F0F0] hover:bg-[#FAFAFA] transition-colors last:border-b-0 cursor-pointer text-[#333]";
  const countClass = "text-[#666] font-mono text-[13px]";

  return (
    <div className="flex flex-col gap-8 w-full max-w-[320px] mx-auto lg:mx-0">
      {/* Search Widget */}
      <div className={widgetClass}>
        <h3 className={headerClass}>Search</h3>
        <div className="p-4 bg-white">
          <div className="relative group">
            <input
              type="text"
              placeholder="Keywords..."
              className="w-full border border-[#E5E5E5] p-3 pl-4 pr-10 text-[14px] focus:outline-none focus:border-gray-400 placeholder:text-gray-300 transition-colors"
            />
            <Search className="absolute right-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-gray-600" />
          </div>
        </div>
      </div>

      {/* Tags Widget */}
      <div className={widgetClass}>
        <h3 className={headerClass}>Tags</h3>
        <div className="flex flex-col">
          {TAGS.map((tag) => (
            <div key={tag.name} className={itemClass}>
              <span className="font-medium">{tag.name}</span>
              <span className={countClass}>[{tag.count}]</span>
            </div>
          ))}
        </div>
      </div>

      {/* Writers Widget */}
      <div className={widgetClass}>
        <h3 className={headerClass}>Writers</h3>
        <div className="flex flex-col">
          {Object.values(AUTHORS).map((author, index) => (
            <div key={index} className={itemClass}>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold text-[#333]">{author.name}</span>
              </div>
              <span className={countClass}>[{author.count || 0}]</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
