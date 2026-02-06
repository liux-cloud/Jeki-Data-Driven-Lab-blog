import React, { useState } from 'react';
import { TOCItem } from '../utils';
import { ChevronDown } from 'lucide-react';

interface TableOfContentsProps {
    items: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (items.length === 0) return null;

    const scrollToHeading = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#F5F8FA] border border-gray-200 rounded-sm mt-[36px] p-[16px] text-[#08131A]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex items-center gap-2 font-bold hover:opacity-75 transition-opacity"
            >
                <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`}
                />
                <span>目次</span>
            </button>

            {isOpen && (
                <nav className="mt-2 text-[#08131A]">
                    <ul className="border-t border-gray-200 mt-2 pt-2">
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className="border-b border-gray-200 last:border-b-0"
                            >
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => scrollToHeading(item.id, e)}
                                    className={`
                    block py-3 hover:text-blue-600 transition-colors text-[16px] text-[#08131A]/65 font-['YakuHanJPs','Arial','Meiryo','sans-serif']
                    ${item.level === 3 ? 'pl-8' : 'pl-2'}
                  `}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default TableOfContents;
