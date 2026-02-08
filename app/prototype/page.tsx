import Image from 'next/image';
import Link from 'next/link';

interface PrototypeScreen {
  id: number;
  title: string;
  description: string;
  file: string;
  image: string;
}

const screens: PrototypeScreen[] = [
  {
    id: 1,
    title: 'Creator Discovery',
    description:
      'Browse AI-recommended creators with category filters and detailed profiles.',
    file: '01_creator_discovery.html',
    image: 'screen1-viewport.png',
  },
  {
    id: 2,
    title: 'Creator Detail',
    description:
      'View channel analytics, content performance, and follower demographics.',
    file: '02_creator_detail.html',
    image: 'screen2-viewport.png',
  },
  {
    id: 3,
    title: 'Brand Input',
    description:
      'Enter campaign goals, budget, and target audience to start matching.',
    file: '03_brand_input.html',
    image: 'screen3-viewport.png',
  },
  {
    id: 4,
    title: 'Brand Status',
    description:
      'Monitor ongoing campaigns and matching status from your dashboard.',
    file: '04_brand_status.html',
    image: 'screen4-viewport.png',
  },
  {
    id: 5,
    title: 'Matching',
    description:
      'Review AI-analyzed brand-creator compatibility scores and recommendations.',
    file: '05_matching.html',
    image: 'screen5-viewport.png',
  },
  {
    id: 6,
    title: 'Campaign Live',
    description:
      'Track real-time campaign performance and creator activity.',
    file: '06_campaign_live.html',
    image: 'screen6-viewport.png',
  },
  {
    id: 7,
    title: 'Campaign Report',
    description:
      'Access post-campaign analytics including ROI, reach, and engagement rates.',
    file: '07_campaign_report.html',
    image: 'screen7-viewport.png',
  },
];

export default function Prototype() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-24 sm:py-32">
        <Link
          href="/"
          className="inline-block text-[#666] hover:text-white text-sm transition-colors duration-200 mb-10"
        >
          &larr; Back to home
        </Link>

        <p className="text-xs text-[#666] uppercase tracking-widest mb-6">
          Prototype
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-4">
          Sally Prototype
        </h1>
        <p className="text-[#666] text-lg max-w-2xl mb-16">
          SallyLab &mdash; AI-powered creator-brand matching platform prototype.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screens.map((screen) => (
            <a
              key={screen.id}
              href={`/prototype/${screen.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#1a1a1a] rounded-lg hover:border-[#333] transition-colors duration-200 flex flex-col h-full group"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={`/prototype/${screen.image}`}
                  alt={screen.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs text-[#666] uppercase tracking-widest mb-2">
                  Screen {screen.id}
                </span>

                <h2 className="text-lg font-semibold text-white mb-2">
                  {screen.title}
                </h2>

                <p className="text-[#666] text-sm mb-4 flex-grow">
                  {screen.description}
                </p>

                <span className="text-sm text-[#666] group-hover:text-white transition-colors duration-200">
                  Open &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
