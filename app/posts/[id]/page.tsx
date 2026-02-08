'use client';

import Image from 'next/image';
import Link from 'next/link';
import { DiscussionEmbed } from 'disqus-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import PostData from '../../../types/PostData';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function PostPage() {
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const id = (params?.id as string) || '';

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        const res = await fetch('/api/posts/' + id);
        const result = await res.json();
        setPost(result.data);
      } catch {
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const disqusShortname = 'https-godjewel-co-kr';
  const disqusConfig = {
    url: 'https://www.godjewel.co.kr/posts/' + id,
    identifier: `godjewel-posts-${id}`,
    title: post?.title || 'post',
    language: 'ko_KR',
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-text-secondary">로딩 중...</p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-text-secondary text-lg">
          포스트를 찾을 수 없습니다.
        </p>
        <Link href="/posts" className="text-accent hover:text-accent-hover">
          ← 목록으로 돌아가기
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <div className="mb-8">
          <Link
            href="/posts"
            className="text-sm text-text-secondary hover:text-accent transition-colors"
          >
            ← 포스트 목록
          </Link>
        </div>

        {post.category && (
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {post.category}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2 mb-4">
          {post.title}
        </h1>
        {post.date && (
          <p className="text-sm text-text-secondary mb-8">{post.date}</p>
        )}

        {post.image && post.image !== '/jewel-tiger-logo-big.png' && (
          <div className="relative w-full h-64 sm:h-96 mb-10 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-accent prose-strong:text-text-primary prose-code:bg-surface-elevated prose-code:px-1 prose-code:rounded prose-pre:bg-surface-elevated">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {post.content || ''}
          </ReactMarkdown>
        </div>

        <hr className="my-12 border-border" />

        {id && (
          <div className="mt-8">
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        )}
      </article>
    </main>
  );
}
