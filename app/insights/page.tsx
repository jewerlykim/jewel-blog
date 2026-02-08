'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import PostData from '../../types/PostData';
import Image from 'next/image';

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'AI', value: 'ai' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Business', value: 'business' },
  { label: 'Design', value: 'design' },
  { label: 'Culture', value: 'culture' },
  { label: 'General', value: 'general' },
];

export default function Posts() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/insights');
        const result = await res.json();
        setPosts(result.data || []);
      } catch {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filtered =
    activeCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-24 sm:py-32">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-text-primary mb-4">
          Insights
        </h1>
        <p className="text-[#666] mb-10 text-lg">
          Thoughts on AI, technology, business, and culture.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-200 ${
                activeCategory === cat.value
                  ? 'bg-white text-black'
                  : 'border border-[#333] text-[#666] hover:text-white hover:border-[#666]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-[#666] text-center py-20">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-[#666] text-center py-20">No posts yet.</div>
        ) : (
          <div className="space-y-0">
            {filtered.map((post) => (
              <Link
                key={post.slug || post.id}
                href={`/insights/${post.slug || post.id}`}
                className="group flex flex-col sm:flex-row gap-6 sm:gap-10 py-10 border-t border-[#1a1a1a] first:border-t-0"
              >
                {/* Text */}
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  {post.category && (
                    <span className="text-xs text-[#666] uppercase tracking-widest mb-2">
                      {post.category}
                    </span>
                  )}
                  <h2 className="text-xl font-semibold text-white leading-snug group-hover:text-[#999] transition-colors duration-200">
                    {post.title}
                  </h2>
                  {post.date && (
                    <p className="text-xs text-[#666] mt-3">{post.date}</p>
                  )}
                </div>

                {/* Thumbnail */}
                <div className="w-full sm:w-[240px] flex-shrink-0">
                  {post.image ? (
                    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-[#111]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/10] rounded-lg bg-[#111]" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
