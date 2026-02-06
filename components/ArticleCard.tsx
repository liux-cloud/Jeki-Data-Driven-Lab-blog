import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';

interface ArticleCardProps {
  post: BlogPost;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100 flex flex-col md:flex-row gap-6 mb-8 p-4 md:p-0 md:bg-transparent md:hover:bg-white md:hover:p-4 md:-mx-4">
        {/* Image */}
        <div className="w-full md:w-1/3 aspect-video md:aspect-[4/3] relative rounded-lg overflow-hidden shrink-0">
          <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded">16:9</span>
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-gray-500 text-sm mb-2 font-medium">{post.date}</div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-green-700 transition-colors">
            {post.title}
          </h2>
          
          <div className="flex items-center gap-3 mt-2">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm">
              <p className="font-medium text-gray-900">{post.author.name}</p>
              <p className="text-gray-500 text-xs">{post.readTime}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
