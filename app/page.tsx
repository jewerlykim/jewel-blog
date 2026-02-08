import type { Metadata } from 'next';
import Link from 'next/link';
import { reader } from '../lib/reader';
import PostData from '../types/PostData';
import HomePosts from '../components/home/home.posts';

export const metadata: Metadata = {
  title: 'Jewel — AI Engineer, Writer, Builder',
  description:
    'Personal blog and portfolio by Jewel. Writing about AI, technology, engineering, and design.',
  openGraph: {
    url: 'https://godjewel.co.kr/',
    title: 'Jewel — AI Engineer, Writer, Builder',
    description:
      'Personal blog and portfolio by Jewel. Writing about AI, technology, engineering, and design.',
    images: [
      {
        url: 'https://github.com/jewerlykim/jewel-blog/assets/75651834/9e699ea1-8a28-401f-9657-f6edcf3b08c9',
        width: 640,
        height: 640,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

async function getPosts(): Promise<PostData[]> {
  try {
    const posts = await reader.collections.posts.all();
    return posts.map((post, index) => ({
      id: index,
      slug: post.slug,
      title: post.entry.title || '',
      date: post.entry.date || '',
      image: post.entry.image || '',
      content: '',
      category: post.entry.category || '',
      tags: Array.isArray(post.entry.tags)
        ? post.entry.tags.join(',')
        : '',
    }));
  } catch {
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <section className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight max-w-4xl">
          I write about
          <br />
          AI & technology
        </h1>
      </section>

      <HomePosts posts={posts} />

      <section className="px-6 sm:px-12 lg:px-24 py-12 flex justify-center">
        <Link
          href="/insights"
          className="rounded-full border border-[#333] px-8 py-2.5 text-sm text-[#666] hover:text-white hover:border-[#666] transition-colors duration-200"
        >
          Show more
        </Link>
      </section>

      <section className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 border-t border-[#1a1a1a]">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] mb-12">
            Let&apos;s make it
            <br />
            official
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-xs text-[#666] uppercase tracking-widest mb-3"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-[#333] pb-3 text-white placeholder-[#444] focus:outline-none focus:border-[#666] transition-colors duration-200"
              />
            </div>
            <button className="rounded-full border border-[#333] px-8 py-2.5 text-sm text-[#666] hover:text-white hover:border-[#666] transition-colors duration-200 flex-shrink-0">
              Send
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
