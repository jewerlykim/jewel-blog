import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'JewelLog - AI & Tech Portfolio',
  description: 'AI 역량과 기술 통찰력을 공유하는 포트폴리오',
  openGraph: {
    url: 'https://godjewel.co.kr/',
    title: 'JewelLog - AI & Tech Portfolio',
    description: 'AI 역량과 기술 통찰력을 공유하는 포트폴리오',
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

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 py-20 sm:py-32 flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            AI와 기술으로
            <br />
            <span className="text-accent">가치를 만듭니다</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            머신러닝, 데이터 분석, 그리고 소프트웨어 엔지니어링을 통해
            <br className="hidden sm:block" />
            비즈니스 문제를 해결하고 혁신을 주도합니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors duration-200"
            >
              프로젝트 보기
            </Link>
            <Link
              href="/posts"
              className="px-8 py-3 bg-surface border border-border text-text-primary font-semibold rounded-lg hover:bg-surface-elevated transition-colors duration-200"
            >
              기술 블로그
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border mx-4 sm:mx-8" />

      {/* Quick Sections Grid */}
      <section className="px-4 sm:px-8 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* AI Insight */}
          <div className="bg-surface border border-border rounded-lg p-6 sm:p-8 hover:border-accent transition-colors duration-200">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-accent">
              AI 통찰력
            </h3>
            <p className="text-text-secondary leading-relaxed">
              최신 AI 기술과 머신러닝 트렌드를 분석하고,
              실무 적용 가능한 인사이트를 공유합니다.
            </p>
          </div>

          {/* Business */}
          <div className="bg-surface border border-border rounded-lg p-6 sm:p-8 hover:border-accent transition-colors duration-200">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-accent">
              비즈니스 임팩트
            </h3>
            <p className="text-text-secondary leading-relaxed">
              기술을 통해 비즈니스 가치를 창출하는 방법과
              데이터 기반 의사결정 전략을 다룹니다.
            </p>
          </div>

          {/* Projects */}
          <div className="bg-surface border border-border rounded-lg p-6 sm:p-8 hover:border-accent transition-colors duration-200">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-accent">
              프로젝트
            </h3>
            <p className="text-text-secondary leading-relaxed">
              실제 구현한 AI, 웹, 모바일 프로젝트들을
              기술 스택과 함께 소개합니다.
            </p>
          </div>

          {/* Movies */}
          <div className="bg-surface border border-border rounded-lg p-6 sm:p-8 hover:border-accent transition-colors duration-200">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-accent">
              영화 & 문화
            </h3>
            <p className="text-text-secondary leading-relaxed">
              기술과 문화의 교집합을 탐색하며,
              영화와 미디어를 통한 통찰을 나눕니다.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 sm:px-8 py-16 text-center border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          더 알아보기
        </h2>
        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
          최신 포스트와 프로젝트를 확인하고,
          기술 여정에 함께하세요.
        </p>
        <Link
          href="/posts"
          className="inline-block px-6 py-2 text-accent hover:text-accent-hover transition-colors duration-200 font-semibold"
        >
          블로그 방문 →
        </Link>
      </section>
    </main>
  );
}
