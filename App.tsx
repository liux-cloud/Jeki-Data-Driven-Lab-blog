import React, { useMemo } from 'react';
import { HashRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ArticleCard from './components/ArticleCard';
import TableOfContents from './components/TableOfContents';
import { processContentWithTOC, calculateReadingTime } from './utils';
import { usePostViews } from './hooks/usePostViews';
import { BLOG_POSTS } from './constants';
import { BlogPost } from './types';

// Directory View Component
const DirectoryView: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Article Directory</h1>
          <div className="space-y-2">
            {BLOG_POSTS.map(post => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <Sidebar variant="directory" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Detail View Component
const PostDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Default to the first post if id not found or provided, for demo purposes
  const post = BLOG_POSTS.find(p => p.id === id) || BLOG_POSTS[0];

  const { processedContent, tocItems } = useMemo(() => {
    return processContentWithTOC(post.content);
  }, [post.content]);

  // Calculate reading time
  const readingTime = useMemo(() => calculateReadingTime(post.content), [post.content]);

  // Get view counts from Supabase
  const { viewCount, isLoading: viewsLoading } = usePostViews(post.id);

  return (
    <div className="max-w-[1140px] mx-auto px-[15px] py-[50px]">

      {/* Breadcrumbs */}
      <div className="text-xs text-gray-400 mb-6 font-mono text-center lg:text-left">
        JOOL - ブログ / <span className="text-gray-600">Vibe Coding</span>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-[40px]">
        {/* Main Content */}
        <article className="w-full lg:flex-1 max-w-[800px] bg-white border border-[#eee] p-[40px] rounded-sm">
          {/* Hero Image */}
          <div className="w-full aspect-[2/1] bg-gray-200 mb-8 overflow-hidden rounded-sm">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title Area */}
          <h1
            className="w-full text-[length:clamp(1.5rem,4vw+1rem,2rem)] font-bold text-[#08131A] mt-[4.5rem] mb-[1.125rem] leading-[1.3] font-['YakuHanJPs','Arial','Meiryo','sans-serif'] antialiased text-left"
            style={{ textRendering: 'optimizeLegibility' }}
          >
            {post.title}
          </h1>
          {post.subtitle && (
            <h2 className="text-lg text-gray-600 mb-4 font-serif italic text-left">
              {post.subtitle}
            </h2>
          )}

          {/* Meta Data with Reading Time and View Count */}
          <div className="flex flex-wrap items-center text-xs md:text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8 gap-x-2">
            <span className="mr-2">最終更新日 : {post.date}</span>
            <span className="mx-2">|</span>
            <span className="font-medium">{post.author.name} {post.author.role}</span>
            <span className="mx-2">|</span>
            <span className="text-gray-400">📖 {readingTime} min read</span>
            <span className="mx-2">|</span>
            <span className="text-gray-400">
              👁 {viewsLoading ? '...' : (viewCount?.toLocaleString() ?? '0')} views
            </span>
          </div>

          {/* Schema.org Structured Data (JSON-LD) for SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.subtitle || post.excerpt,
              "image": post.imageUrl,
              "datePublished": post.date,
              "dateModified": post.date,
              "author": {
                "@type": "Person",
                "name": post.author.name,
                "jobTitle": post.author.role
              },
              "publisher": {
                "@type": "Organization",
                "name": "Jeki Data-Driven Lab",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://jeki-ddl.co.jp/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://jeki-ddl.co.jp/#/post/${post.id}`
              },
              "wordCount": post.content.replace(/<[^>]*>/g, '').length,
              "timeRequired": `PT${readingTime}M`,
              "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/ReadAction",
                "userInteractionCount": viewCount || 0
              }
            })}
          </script>

          {/* Table of Contents */}
          <TableOfContents items={tocItems} />

          {/* Content Body */}
          <div className="prose max-w-none text-[#2D3436] [&_*]:text-left 
            [&_p]:text-[17px] [&_p]:text-[#2D3436] [&_p]:my-[24px] [&_p]:leading-[1.75] [&_p]:font-['YakuHanJPs','Arial','Meiryo','sans-serif'] [&_p]:tracking-[0.03em] 
            [&_li]:text-[17px] [&_li]:leading-[1.75] [&_li]:mb-[12px] [&_li]:text-[#2D3436] [&_li]:font-['YakuHanJPs','Arial','Meiryo','sans-serif']
            [&_ol]:pl-[1.5rem] [&_ul]:pl-[1.5rem] [&_ol]:mb-[24px] [&_ul]:mb-[24px] 
            [&_h2]:text-[24px] [&_h2]:font-bold [&_h2]:mt-[48px] [&_h2]:mb-[24px] [&_h2]:text-black [&_h2]:leading-[1.4] 
            [&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:mt-[40px] [&_h3]:mb-[20px] [&_h3]:text-black [&_h3]:leading-[1.4] 
            [&_blockquote]:border-l-4 [&_blockquote]:border-[#E5E7EB] [&_blockquote]:pl-4 [&_blockquote]:my-[36px] [&_blockquote]:italic [&_blockquote]:text-gray-600
            [&_a]:text-[#1e3a5f] [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-slate-300 [&_a]:transition-colors [&_a:hover]:decoration-[#1e3a5f] 
            [&_img]:rounded-lg [&_img]:shadow-sm [&_img]:my-[40px] 
            [&_strong]:font-bold [&_strong]:text-[#08131A] 
            [&_hr]:border-gray-200 [&_hr]:my-[48px]
            [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[0.9em] [&_code]:font-mono [&_code]:text-[#d63384]
            [&_pre]:bg-[#f8f9fa] [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-[36px] [&_pre]:text-sm">
            <div dangerouslySetInnerHTML={{ __html: processedContent }} />
          </div>

          {/* Social Share Buttons */}
          <div className="mt-8 mb-12 flex flex-wrap gap-3">
            <button className="bg-[#00A4DE] text-white text-[11px] font-bold px-3 py-1 rounded-sm flex items-center gap-1 hover:opacity-90 transition-opacity">
              <span className="font-serif font-black italic">B!</span>
              <span className="bg-white/20 px-1 rounded-[2px]">0</span>
            </button>

            <button className="bg-[#1877F2] text-white text-[11px] font-bold px-3 py-1 rounded-sm flex items-center gap-1 hover:opacity-90 transition-opacity">
              <span className="font-bold">Like</span>
              <span className="bg-white/20 px-1.5 rounded-[2px]">0</span>
            </button>

            <button className="bg-black text-white text-[11px] font-bold px-3 py-1 rounded-sm flex items-center gap-1 hover:opacity-80 transition-opacity">
              <span className="text-sm leading-none">𝕏</span>
              <span>ポスト</span>
            </button>

            <button className="text-[#ee4056] text-[13px] font-bold px-2 py-1 flex items-center gap-1 hover:opacity-80 transition-opacity">
              <span>Pocket</span>
            </button>
          </div>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.jeki-ddl.co.jp/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e3a5f] hover:bg-[#2c4e7a] text-white font-medium py-3 px-8 rounded shadow-md transition-colors"
            >
              Contact Us for Vibe Coding Solutions
            </a>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-[300px] shrink-0">
          <div className="sticky top-24">
            <Sidebar variant="detail" />
          </div>
        </aside>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<DirectoryView />} />
          <Route path="/post/:id" element={<PostDetailView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;