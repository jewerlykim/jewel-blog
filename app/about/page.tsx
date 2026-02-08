import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Jewel',
  description:
    'AI engineer building at the intersection of machine learning, software, and design.',
  openGraph: {
    url: 'https://godjewel.co.kr/about',
    title: 'About — Jewel',
    description:
      'AI engineer building at the intersection of machine learning, software, and design.',
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      {/* Hero */}
      <section className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="text-xs text-[#666] uppercase tracking-widest mb-6">
            About
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] mb-8">
            Jewel
          </h1>
          <p className="text-lg sm:text-xl text-[#999] leading-relaxed">
            AI Engineer & Tech Innovator
          </p>
        </div>
      </section>

      <div className="h-px bg-[#1a1a1a] mx-6 sm:mx-12 lg:mx-24" />

      {/* Introduction */}
      <section className="px-6 sm:px-12 lg:px-24 py-16 sm:py-24">
        <div className="max-w-3xl space-y-16">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal">
              Introduction
            </h2>
            <p className="text-[#999] leading-relaxed">
              I&apos;m an engineer who solves real business problems with AI and
              data-driven solutions. From developing machine learning models to
              production deployment, I&apos;ve experienced the full lifecycle
              and believe in balancing technical depth with business impact.
            </p>
            <p className="text-[#999] leading-relaxed">
              I explore cutting-edge AI technology and think deeply about how to
              apply it in practice. I enjoy explaining complex concepts clearly
              and collaborating with teams to build better solutions.
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-t border-[#1a1a1a] pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">
                  ML & AI
                </h3>
                <ul className="space-y-2 text-[#999] text-sm">
                  <li>Machine learning model development & optimization</li>
                  <li>Data analysis & visualization</li>
                  <li>LLM-based applications</li>
                  <li>Production deployment & monitoring</li>
                </ul>
              </div>

              <div className="border-t border-[#1a1a1a] pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">
                  Backend & Infrastructure
                </h3>
                <ul className="space-y-2 text-[#999] text-sm">
                  <li>Python, TypeScript, Go</li>
                  <li>REST APIs & microservices</li>
                  <li>Database design & optimization</li>
                  <li>Cloud deployment (AWS, GCP)</li>
                </ul>
              </div>

              <div className="border-t border-[#1a1a1a] pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">
                  Frontend & Full-Stack
                </h3>
                <ul className="space-y-2 text-[#999] text-sm">
                  <li>React, Next.js, TypeScript</li>
                  <li>Responsive UI/UX design</li>
                  <li>Performance optimization</li>
                  <li>Full-stack application development</li>
                </ul>
              </div>

              <div className="border-t border-[#1a1a1a] pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">
                  Problem Solving
                </h3>
                <ul className="space-y-2 text-[#999] text-sm">
                  <li>Complex problem analysis & design</li>
                  <li>Technical decision-making & architecture</li>
                  <li>Team collaboration & communication</li>
                  <li>Continuous learning & improvement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How I Work */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal">
              How I Work
            </h2>
            <div className="space-y-6">
              <div className="border-t border-[#1a1a1a] pt-6">
                <h3 className="text-sm font-semibold text-white mb-2">
                  1. Understand the Problem
                </h3>
                <p className="text-[#999] text-sm leading-relaxed">
                  Deeply understand business requirements and technical
                  constraints. Setting clear goals is the first step toward a
                  good solution.
                </p>
              </div>

              <div className="border-t border-[#1a1a1a] pt-6">
                <h3 className="text-sm font-semibold text-white mb-2">
                  2. Design & Plan
                </h3>
                <p className="text-[#999] text-sm leading-relaxed">
                  Architect for scalability, maintainability, and performance.
                  Review designs with the team and incorporate feedback.
                </p>
              </div>

              <div className="border-t border-[#1a1a1a] pt-6">
                <h3 className="text-sm font-semibold text-white mb-2">
                  3. Build & Test
                </h3>
                <p className="text-[#999] text-sm leading-relaxed">
                  Write clean, testable code. Maintain fast feedback loops
                  through continuous integration and deployment.
                </p>
              </div>

              <div className="border-t border-[#1a1a1a] pt-6">
                <h3 className="text-sm font-semibold text-white mb-2">
                  4. Monitor & Improve
                </h3>
                <p className="text-[#999] text-sm leading-relaxed">
                  Monitor production performance and continuously improve based
                  on data-driven insights.
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal">
              Connect
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#1a1a1a] pt-6">
              <div>
                <h3 className="text-xs text-[#666] uppercase tracking-widest mb-4">
                  Social
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/jewerlykim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-[#999] transition-colors duration-200 text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/jewel-kim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-[#999] transition-colors duration-200 text-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/jewerlykim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white hover:text-[#999] transition-colors duration-200 text-sm"
                  >
                    X (Twitter)
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xs text-[#666] uppercase tracking-widest mb-4">
                  Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:jewel@godjewel.co.kr"
                    className="block text-white hover:text-[#999] transition-colors duration-200 text-sm"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-12 lg:px-24 py-20 border-t border-[#1a1a1a]">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4">
            Want to work together?
          </h2>
          <p className="text-[#666] mb-8">
            Always open to new projects and collaboration opportunities.
          </p>
          <a
            href="mailto:jewel@godjewel.co.kr"
            className="inline-block rounded-full border border-[#333] px-8 py-2.5 text-sm text-[#666] hover:text-white hover:border-[#666] transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
