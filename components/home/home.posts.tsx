'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PostData from '../../types/PostData';

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'AI', value: 'ai' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Business', value: 'business' },
  { label: 'Design', value: 'design' },
  { label: 'Culture', value: 'culture' },
  { label: 'General', value: 'general' },
];

export default function HomePosts({ posts }: { posts: PostData[] }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filter Pills */}
      <section className="px-6 sm:px-12 lg:px-24 pb-8">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs text-[#666] uppercase tracking-widest mr-2">
            Filters
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors duration-200 ${
                activeCategory === cat.value
                  ? 'bg-white text-black'
                  : 'border border-[#333] text-[#666] hover:text-white hover:border-[#666]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Post Rows */}
      <section className="px-6 sm:px-12 lg:px-24">
        {filtered.length === 0 ? (
          <div className="border-t border-[#1a1a1a] py-20 text-center text-[#666]">
            No posts yet. Create your first post at{' '}
            <Link
              href="/keystatic"
              className="underline hover:text-white transition-colors"
            >
              /keystatic
            </Link>
            .
          </div>
        ) : (
          filtered.map((post) => (
            <Link
              key={post.slug || post.id}
              href={`/insights/${post.slug || post.id}`}
              className="border-t border-[#1a1a1a] py-12 sm:py-16 flex flex-col sm:flex-row gap-8 sm:gap-12 group"
            >
              {/* Left: Text */}
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <p className="text-xs text-[#666] uppercase tracking-widest mb-3">
                  Jewel
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-4 group-hover:text-[#999] transition-colors duration-200">
                  {post.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-[#666]">
                  {post.category && (
                    <>
                      <span className="capitalize">{post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-[#333]" />
                    </>
                  )}
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Right: Thumbnail */}
              <div className="w-full sm:w-[320px] lg:w-[400px] flex-shrink-0">
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
          ))
        )}

        {/* Last border */}
        {filtered.length > 0 && (
          <div className="border-t border-[#1a1a1a]" />
        )}
      </section>
    </>
  );
}
