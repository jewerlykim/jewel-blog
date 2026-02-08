'use client';

import { DiscussionEmbed } from 'disqus-react';

export default function Guestbook() {
  const disqusShortname = 'https-www-godjewel-co-kr';
  const disqusConfig = {
    url: 'https://www.godjewel.co.kr/guestbook',
    identifier: 'guestbook',
    title: 'Guestbook',
    language: 'en',
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 sm:px-12 py-24 sm:py-32">
        <p className="text-xs text-[#666] uppercase tracking-widest mb-6">
          Community
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-white mb-4">
          Guestbook
        </h1>
        <p className="text-[#666] mb-12">
          Leave a message, share a thought, or just say hello.
        </p>

        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 sm:p-8">
          <DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
      </div>
    </main>
  );
}
