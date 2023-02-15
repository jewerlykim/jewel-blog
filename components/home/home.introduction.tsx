import Image from 'next/image';
import { useTranslation } from 'react-i18next';

function HomeIntroduction() {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-screen-xl mx-auto flex-col items-center justify-center p-4 border-2 border-gray-300">
      <div className="rounded-full shadow-md relative h-max aspect-[1/1] mx-auto overflow-hidden">
        <Image src="/hideout_profile.png" alt="내 프로필" fill={true} />
      </div>
      <div className="p-1">
        <h1 className="text-xl font-bold mb-4 text-center">JEWEL BLOG</h1>
        <p className="text-sm mb-4 whitespace-normal">
          {t('blogIntroduction')}
        </p>
      </div>
    </div>
  );
}

export default HomeIntroduction;
