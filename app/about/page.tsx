import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - JEWELOG',
  description: 'AI 엔지니어 Jewel의 소개, 핵심 역량, 그리고 작업 방식',
  openGraph: {
    url: 'https://godjewel.co.kr/about',
    title: 'About - JEWELOG',
    description: 'AI 엔지니어 Jewel의 소개, 핵심 역량, 그리고 작업 방식',
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-8 py-20 sm:py-32 flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-surface border-2 border-accent flex items-center justify-center mb-6 mx-auto">
              <span className="text-4xl sm:text-5xl">💎</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Jewel
          </h1>
          <p className="text-lg sm:text-xl text-accent font-semibold">
            AI Engineer & Tech Innovator
          </p>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            머신러닝과 소프트웨어 엔지니어링으로 복잡한 문제를 우아하게 해결합니다.
            <br className="hidden sm:block" />
            기술을 통해 비즈니스 가치를 창출하는 것을 추구합니다.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border mx-4 sm:mx-8" />

      {/* About Section */}
      <section className="px-4 sm:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* 소개 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent">
              소개
            </h2>
            <div className="bg-surface border border-border rounded-lg p-6 sm:p-8 space-y-4">
              <p className="text-text-secondary leading-relaxed">
                저는 AI와 데이터 기반 솔루션으로 실제 비즈니스 문제를 해결하는 엔지니어입니다.
                머신러닝 모델 개발부터 프로덕션 배포까지 전 과정을 경험했으며,
                기술적 깊이와 비즈니스 임팩트의 균형을 맞추는 것을 중요하게 생각합니다.
              </p>
              <p className="text-text-secondary leading-relaxed">
                최신 AI 기술을 탐구하고, 이를 실무에 적용하는 방법을 고민합니다.
                복잡한 기술을 명확하게 설명하고, 팀과 협력하여 더 나은 솔루션을 만드는 것을 즐깁니다.
              </p>
            </div>
          </div>

          {/* 핵심 역량 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent">
              핵심 역량
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* ML & AI */}
              <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors duration-200">
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  ML & AI
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• 머신러닝 모델 개발 및 최적화</li>
                  <li>• 데이터 분석 및 시각화</li>
                  <li>• LLM 기반 애플리케이션</li>
                  <li>• 프로덕션 배포 및 모니터링</li>
                </ul>
              </div>

              {/* Backend & Infrastructure */}
              <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors duration-200">
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  Backend & Infrastructure
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Python, TypeScript, Go</li>
                  <li>• REST API 및 마이크로서비스</li>
                  <li>• 데이터베이스 설계 및 최적화</li>
                  <li>• 클라우드 배포 (AWS, GCP)</li>
                </ul>
              </div>

              {/* Frontend & Full-Stack */}
              <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors duration-200">
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  Frontend & Full-Stack
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• React, Next.js, TypeScript</li>
                  <li>• 반응형 UI/UX 설계</li>
                  <li>• 성능 최적화</li>
                  <li>• 풀스택 애플리케이션 개발</li>
                </ul>
              </div>

              {/* Problem Solving */}
              <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors duration-200">
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  Problem Solving
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• 복잡한 문제 분석 및 설계</li>
                  <li>• 기술 의사결정 및 아키텍처</li>
                  <li>• 팀 협력 및 커뮤니케이션</li>
                  <li>• 지속적 학습 및 개선</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 작업 방식 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent">
              작업 방식
            </h2>
            <div className="space-y-4">
              <div className="bg-surface border border-border rounded-lg p-6 sm:p-8">
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  1. 문제 이해
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  비즈니스 요구사항과 기술적 제약을 깊이 있게 이해합니다.
                  명확한 목표 설정이 좋은 솔루션의 첫 단계입니다.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 sm:p-8">
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  2. 설계 및 계획
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  확장성, 유지보수성, 성능을 고려한 아키텍처를 설계합니다.
                  팀과 함께 설계를 검토하고 피드백을 반영합니다.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 sm:p-8">
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  3. 구현 및 테스트
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  깔끔하고 테스트 가능한 코드를 작성합니다.
                  지속적인 통합과 배포를 통해 빠른 피드백 루프를 유지합니다.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-lg p-6 sm:p-8">
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  4. 모니터링 및 개선
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  프로덕션 환경에서의 성능을 모니터링하고,
                  데이터 기반으로 지속적으로 개선합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 연락 & 링크 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent">
              연락 & 링크
            </h2>
            <div className="bg-surface border border-border rounded-lg p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide">
                    소셜
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="https://github.com/jewerlykim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent hover:text-accent-hover transition-colors duration-200"
                    >
                      GitHub →
                    </a>
                    <a
                      href="https://linkedin.com/in/jewel-kim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent hover:text-accent-hover transition-colors duration-200"
                    >
                      LinkedIn →
                    </a>
                    <a
                      href="https://twitter.com/jewerlykim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent hover:text-accent-hover transition-colors duration-200"
                    >
                      Twitter →
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide">
                    연락처
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="mailto:jewel@godjewel.co.kr"
                      className="block text-accent hover:text-accent-hover transition-colors duration-200"
                    >
                      Email →
                    </a>
                    <Link
                      href="/posts"
                      className="block text-accent hover:text-accent-hover transition-colors duration-200"
                    >
                      블로그 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 sm:px-8 py-16 text-center border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          함께 일하고 싶으신가요?
        </h2>
        <p className="text-text-secondary mb-8 max-w-xl mx-auto">
          새로운 프로젝트나 협력 기회에 항상 열려있습니다.
          편하게 연락주세요.
        </p>
        <a
          href="mailto:jewel@godjewel.co.kr"
          className="inline-block px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors duration-200"
        >
          연락하기
        </a>
      </section>
    </main>
  );
}
