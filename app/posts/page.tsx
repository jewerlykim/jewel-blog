'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import PostData from '../../types/PostData';
import Image from 'next/image';

const CATEGORIES = [
  { label: '전체', value: 'all' },
  { label: 'AI Insight', value: 'ai-insight' },
  { label: 'Business', value: 'business' },
  { label: 'Projects', value: 'projects' },
  { label: 'Movies', value: 'movies' },
  { label: 'General', value: 'general' },
];

export default function Posts() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
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
      <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
          POSTS
        </h1>
        <p className="text-text-secondary mb-8">
          AI, 기술, 비즈니스, 그리고 문화에 대한 글을 공유합니다.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.value
                  ? 'bg-accent text-white'
                  : 'bg-surface text-text-secondary hover:text-text-primary border border-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-text-secondary text-center py-20">
            로딩 중...
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-text-secondary text-center py-20">
            포스트가 없습니다.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {filtered.map((post) => (
              <Link
                key={post.slug || post.id}
                href={`/posts/${post.slug || post.id}`}
                className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-colors"
              >
                <div className="relative h-48 w-full bg-surface-elevated">
                  <Image
                    src={post.image || '/jewel-tiger-logo-big.png'}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  {post.category && (
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {post.category}
                    </span>
                  )}
                  <h2 className="text-lg font-semibold text-text-primary mt-1 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  {post.date && (
                    <p className="text-sm text-text-secondary mt-2">
                      {post.date}
                    </p>
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
