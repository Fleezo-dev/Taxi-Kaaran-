import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, User, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogsData';

interface BlogListPageProps {
  onBack: () => void;
  onSelectPost: (postId: string) => void;
}

export const BlogListPage: React.FC<BlogListPageProps> = ({ onBack, onSelectPost }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-400 hover:text-white hover:border-amber-500 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" /> Taxi Kaaran Travel & Cab Insights
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display uppercase">
            TRAVEL BLOGS & ADVISORIES
          </h1>
          <p className="text-sm text-slate-300">
            Expert advice on Coimbatore airport transfers, hill station hairpin bends, temple timings, and fixed outstation cab booking.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-[#121A2E]/90 rounded-3xl border border-amber-500/20 hover:border-amber-500/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group relative"
            >
              <div>
                
                {/* Meta Row */}
                <div className="flex items-center justify-between mb-4 text-xs">
                  <span className="font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[11px]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight group-hover:text-amber-400 transition-colors mb-3">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Author & Read Article Button */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs">
                  <div className="font-bold text-white">{post.author}</div>
                  <div className="text-[10px] text-slate-400">{post.date}</div>
                </div>

                <button
                  onClick={() => onSelectPost(post.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
