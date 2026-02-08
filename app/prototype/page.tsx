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
    title: '크리에이터 디스커버리',
    description:
      'AI가 추천하는 크리에이터를 탐색하고, 카테고리별 필터링 및 상세 프로필을 확인합니다.',
    file: '01_creator_discovery.html',
    image: 'screen1-viewport.png',
  },
  {
    id: 2,
    title: '크리에이터 상세',
    description:
      '크리에이터의 채널 분석, 콘텐츠 성과, 팔로워 데모그래픽 등 상세 정보를 확인합니다.',
    file: '02_creator_detail.html',
    image: 'screen2-viewport.png',
  },
  {
    id: 3,
    title: '브랜드 입력',
    description:
      '캠페인 목표, 예산, 타겟 오디언스 등 브랜드 정보를 입력하여 매칭을 시작합니다.',
    file: '03_brand_input.html',
    image: 'screen3-viewport.png',
  },
  {
    id: 4,
    title: '브랜드 현황',
    description:
      '진행 중인 캠페인 현황과 매칭 상태를 대시보드에서 한눈에 확인합니다.',
    file: '04_brand_status.html',
    image: 'screen4-viewport.png',
  },
  {
    id: 5,
    title: '매칭',
    description:
      'AI가 분석한 브랜드-크리에이터 궁합 점수와 추천 결과를 확인합니다.',
    file: '05_matching.html',
    image: 'screen5-viewport.png',
  },
  {
    id: 6,
    title: '캠페인 라이브',
    description:
      '진행 중인 캠페인의 실시간 성과와 크리에이터 활동을 모니터링합니다.',
    file: '06_campaign_live.html',
    image: 'screen6-viewport.png',
  },
  {
    id: 7,
    title: '캠페인 리포트',
    description:
      '캠페인 종료 후 성과 분석 보고서를 확인합니다. ROI, 도달률, 참여율 등.',
    file: '07_campaign_report.html',
    image: 'screen7-viewport.png',
  },
];

export default function Prototype() {
  return (
    <div className="bg-background min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-block text-text-secondary hover:text-accent text-sm font-medium mb-8 transition-colors duration-150"
        >
          &larr; 홈으로
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            SALLY PROTOTYPE
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl">
            셀리랩 &mdash; AI 기반 크리에이터-브랜드 매칭 플랫폼 프로토타입
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screens.map((screen) => (
            <a
              key={screen.id}
              href={`/prototype/${screen.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface border border-border rounded-lg hover:border-accent transition-colors duration-200 flex flex-col h-full group"
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
                <span className="text-accent text-xs font-medium mb-2">
                  SCREEN {screen.id}
                </span>

                <h2 className="text-xl font-bold text-text-primary mb-2">
                  {screen.title}
                </h2>

                <p className="text-text-secondary text-sm mb-4 flex-grow">
                  {screen.description}
                </p>

                <span className="text-accent group-hover:text-accent-hover text-sm font-medium transition-colors duration-150">
                  열기 &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
