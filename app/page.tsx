import type { Metadata } from 'next';
import Link from 'next/link';

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

const FILTERS = [
  'Research',
  'Engineering',
  'AI',
  'Business',
  'Design',
  'Culture',
];

const POSTS = [
  {
    author: 'Jewel',
    title: 'Designing a New Relationship with AI',
    category: 'AI',
    date: '25 November 2024',
  },
  {
    author: 'Jewel',
    title: 'How to Build an AI Assistant that Drives Immediate Value',
    category: 'Engineering',
    date: '07 August 2024',
  },
  {
    author: 'Jewel',
    title: 'Evolving with Intent',
    category: 'Design',
    date: '28 February 2024',
  },
  {
    author: 'Jewel',
    title: 'The Business of Intelligence',
    category: 'Business',
    date: '15 January 2024',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero Section */}
      <section className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight max-w-4xl">
          I write about
          <br />
          AI & technology
        </h1>
      </section>

      {/* Filter Pills */}
      <section className="px-6 sm:px-12 lg:px-24 pb-8">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs text-[#666] uppercase tracking-widest mr-2">
            Filters
          </span>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className="rounded-full border border-[#333] px-4 py-1.5 text-sm text-[#666] hover:text-white hover:border-[#666] transition-colors duration-200"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Post Rows */}
      <section className="px-6 sm:px-12 lg:px-24">
        {POSTS.map((post, i) => (
          <article
            key={i}
            className="border-t border-[#1a1a1a] py-12 sm:py-16 flex flex-col sm:flex-row gap-8 sm:gap-12 group cursor-pointer"
          >
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <p className="text-xs text-[#666] uppercase tracking-widest mb-3">
                {post.author}
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-4 group-hover:text-[#999] transition-colors duration-200">
                {post.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-[#666]">
                <span>{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-[#333]" />
                <span>{post.date}</span>
              </div>
            </div>

            {/* Right: Thumbnail Placeholder */}
            <div className="w-full sm:w-[320px] lg:w-[400px] flex-shrink-0">
              <div className="w-full aspect-[16/10] rounded-lg bg-[#111]" />
            </div>
          </article>
        ))}

        {/* Last border */}
        <div className="border-t border-[#1a1a1a]" />
      </section>

      {/* Show More */}
      <section className="px-6 sm:px-12 lg:px-24 py-12 flex justify-center">
        <Link
          href="/insights"
          className="rounded-full border border-[#333] px-8 py-2.5 text-sm text-[#666] hover:text-white hover:border-[#666] transition-colors duration-200"
        >
          Show more
        </Link>
      </section>

      {/* Newsletter Section */}
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
