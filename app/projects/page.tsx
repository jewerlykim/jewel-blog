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
    subtitle: 'Personal Blog Platform',
    description:
      'Full-stack blog built with Next.js App Router and Keystatic CMS. Markdown support, responsive design, dark editorial theme.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Keystatic', 'React'],
    links: [
      { label: 'Live', url: 'https://godjewel.co.kr' },
      { label: 'GitHub', url: 'https://github.com/jewerlykim/jewel-blog' },
    ],
  },
  {
    id: 'portfolio-v2',
    title: 'PORTFOLIO V2',
    subtitle: 'Portfolio Website',
    description:
      'A portfolio showcasing personal work and career. Dark theme, smooth animations, mobile-optimized.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    links: [
      { label: 'Live', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    id: 'design-system',
    title: 'DESIGN SYSTEM',
    subtitle: 'Reusable Component Library',
    description:
      'Component library for consistent UI/UX. Token-based color system with accessibility in mind.',
    tech: ['React', 'TypeScript', 'Storybook', 'CSS-in-JS'],
    links: [
      { label: 'Storybook', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    id: 'cli-tool',
    title: 'CLI TOOL',
    subtitle: 'Developer Productivity Tool',
    description:
      'CLI tool for project initialization, file generation, and build automation. Built on Node.js.',
    tech: ['Node.js', 'TypeScript', 'Commander.js', 'Chalk'],
    links: [
      { label: 'npm', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    id: 'data-viz',
    title: 'DATA VISUALIZATION',
    subtitle: 'Data Visualization Dashboard',
    description:
      'Dashboard for visualizing real-time data. Charts, graphs, and interactive filters.',
    tech: ['React', 'D3.js', 'Chart.js', 'PostgreSQL'],
    links: [
      { label: 'Live', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    id: 'mobile-app',
    title: 'MOBILE APP',
    subtitle: 'Cross-Platform Mobile Application',
    description:
      'iOS/Android mobile app with offline support, push notifications, and local storage.',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    links: [
      { label: 'App Store', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
];

export default function Projects() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-24 sm:py-32">
        <p className="text-xs text-[#666] uppercase tracking-widest mb-6">
          Work
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-text-primary mb-4">
          Projects
        </h1>
        <p className="text-[#666] text-lg max-w-2xl mb-16">
          A selection of recent projects. Each one explores new technologies and
          challenges.
        </p>

        <div className="space-y-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-t border-[#1a1a1a] py-10 sm:py-12"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#666] mt-1">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex gap-4 flex-shrink-0">
                  {project.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.url}
                      className="text-sm text-[#666] hover:text-white transition-colors duration-200"
                    >
                      {link.label} &rarr;
                    </Link>
                  ))}
                </div>
              </div>

              <p className="text-[#999] text-sm leading-relaxed mb-4 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-[#666] border border-[#1a1a1a] rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="border-t border-[#1a1a1a]" />
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="https://github.com/jewerlykim"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#333] px-8 py-2.5 text-sm text-[#666] hover:text-white hover:border-[#666] transition-colors duration-200"
          >
            View GitHub Profile
          </Link>
        </div>
      </div>
    </main>
  );
}
