import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  links: {
    label: string;
    url: string;
  }[];
}

const projects: Project[] = [
  {
    id: 'jewel-blog',
    title: 'JEWEL BLOG',
    subtitle: '개인 블로그 플랫폼',
    description: 'Next.js App Router와 Supabase를 활용한 풀스택 블로그. 마크다운 지원, 다국어 i18n, 반응형 디자인.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'React'],
    links: [
      { label: 'Live', url: 'https://godjewel.co.kr' },
      { label: 'GitHub', url: 'https://github.com' },
    ],
  },
  {
    id: 'portfolio-v2',
    title: 'PORTFOLIO V2',
    subtitle: '포트폴리오 웹사이트',
    description: '개인 작업물과 경력을 소개하는 포트폴리오. 다크 테마, 부드러운 애니메이션, 모바일 최적화.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    links: [
      { label: 'Live', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    id: 'design-system',
    title: 'DESIGN SYSTEM',
    subtitle: '재사용 가능한 컴포넌트 라이브러리',
    description: '일관된 UI/UX를 위한 컴포넌트 라이브러리. 토큰 기반 색상 시스템, 접근성 고려.',
    tech: ['React', 'TypeScript', 'Storybook', 'CSS-in-JS'],
    links: [
      { label: 'Storybook', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    id: 'cli-tool',
    title: 'CLI TOOL',
    subtitle: '개발자 생산성 도구',
    description: '프로젝트 초기화, 파일 생성, 빌드 자동화를 위한 CLI 도구. Node.js 기반.',
    tech: ['Node.js', 'TypeScript', 'Commander.js', 'Chalk'],
    links: [
      { label: 'npm', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    id: 'data-viz',
    title: 'DATA VISUALIZATION',
    subtitle: '데이터 시각화 대시보드',
    description: '실시간 데이터를 시각화하는 대시보드. 차트, 그래프, 인터랙티브 필터.',
    tech: ['React', 'D3.js', 'Chart.js', 'PostgreSQL'],
    links: [
      { label: 'Live', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    id: 'mobile-app',
    title: 'MOBILE APP',
    subtitle: '크로스플랫폼 모바일 애플리케이션',
    description: 'iOS/Android 지원 모바일 앱. 오프라인 지원, 푸시 알림, 로컬 스토리지.',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    links: [
      { label: 'App Store', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
];

export default function Projects() {
  return (
    <div className="bg-background min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            PROJECTS
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl">
            최근 진행한 프로젝트들입니다. 각 프로젝트는 새로운 기술과 도전을 담고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors duration-200 flex flex-col h-full"
            >
              <h2 className="text-xl font-bold text-text-primary mb-2">
                {project.title}
              </h2>

              <p className="text-accent text-sm font-medium mb-3">
                {project.subtitle}
              </p>

              <p className="text-text-secondary text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-surface-elevated border border-border text-text-secondary text-xs px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                {project.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    className="text-accent hover:text-accent-hover text-sm font-medium transition-colors duration-150"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-text-secondary mb-4">
            더 많은 프로젝트를 보고 싶으신가요?
          </p>
          <Link
            href="https://github.com"
            className="inline-block text-accent hover:text-accent-hover font-medium transition-colors duration-150"
          >
            GitHub 프로필 방문 →
          </Link>
        </div>
      </div>
    </div>
  );
}
