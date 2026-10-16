import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  MessageSquare, 
  Phone, 
  ChevronRight, 
  Tag,
  Compass,
  ArrowRight
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogsData';

interface BlogDetailPageProps {
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (postId: string) => void;
  onSelectDestination?: (destId: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  post,
  onBack,
  onSelectPost,
  onSelectDestination
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post.id]);

  const whatsappUrl = `https://wa.me/919080082942?text=${encodeURIComponent(
    `Hello Taxi Kaaran! I was reading your article "${post.title}" and would like to inquire about booking a taxi.`
  )}`;

  const otherPosts = BLOG_POSTS.filter(p => p.id !== post.id);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Top Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-400 hover:text-white hover:border-amber-500 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blogs</span>
          </button>

          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <span className="hover:text-white cursor-pointer" onClick={onBack}>Home</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="hover:text-white cursor-pointer" onClick={onBack}>Blog</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-bold truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {post.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{post.readTime}</span>
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{post.date}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-slate-300">
            <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
              <User className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white">{post.author}</div>
              <div className="text-[11px] text-slate-400">{post.authorRole}</div>
            </div>
          </div>
        </header>

        {/* Lead Excerpt Banner */}
        <div className="p-5 rounded-2xl bg-[#0E1528] border-l-4 border-amber-500 text-sm text-slate-200 leading-relaxed italic">
          "{post.excerpt}"
        </div>

        {/* Article Content Sections */}
        <article className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          {post.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              {sec.sectionTitle && (
                <h2 className="text-xl sm:text-2xl font-black text-white font-display pt-4 border-t border-slate-800/80">
                  {sec.sectionTitle}
                </h2>
              )}

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed text-slate-300">
                  {p}
                </p>
              ))}

              {sec.bulletPoints && (
                <ul className="space-y-2 pl-4 border-l-2 border-amber-500/40 my-3">
                  {sec.bulletPoints.map((b, bIdx) => (
                    <li key={bIdx} className="text-xs sm:text-sm text-slate-200">
                      • {b}
                    </li>
                  ))}
                </ul>
              )}

              {sec.highlightQuote && (
                <div className="p-4 my-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500 text-amber-300 font-semibold text-sm">
                  {sec.highlightQuote}
                </div>
              )}
            </div>
          ))}
        </article>

        {/* Article Tags */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-amber-400" />
          {post.tags.map((t, idx) => (
            <span key={idx} className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-lg">
              #{t}
            </span>
          ))}
        </div>

        {/* Bottom Booking Callout Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 border-2 border-amber-500/40 space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white font-display uppercase">
                Need a Taxi for This Route?
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                Taxi Kaaran offers fixed upfront fares, experienced drivers, and clean AC Sedans & SUVs across Coimbatore and South India.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+919080082942"
                className="px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call 90800 82942</span>
              </a>
            </div>
          </div>

          {post.relatedDestinationId && onSelectDestination && (
            <div className="pt-3 border-t border-amber-500/20 text-xs">
              <button
                onClick={() => onSelectDestination(post.relatedDestinationId!)}
                className="text-amber-400 hover:underline font-bold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>View Full Itinerary, Sightseeing & Hotel Guide for this destination →</span>
              </button>
            </div>
          )}
        </div>

        {/* Other Recommended Articles */}
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <h3 className="text-lg font-black text-white font-display uppercase">
            More Articles from Taxi Kaaran
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherPosts.map((p) => (
              <button
                key={p.id}
                onClick={() => onSelectPost(p.id)}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-left transition-all group cursor-pointer space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] text-amber-400 font-bold uppercase">{p.category} · {p.readTime}</div>
                  <h4 className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mt-1">
                    {p.title}
                  </h4>
                </div>
                <div className="text-[11px] text-amber-400 flex items-center gap-1 font-semibold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
