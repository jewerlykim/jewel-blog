import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ga } from 'react-ga';

const VisitorCounter: NextPage = () => {
  const { t } = useTranslation();
  const [todayViews, setTodayViews] = useState(0);
  const [totalViews, setTotalViews] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // 오늘 방문자 수 가져오기
      // 전체 방문자 수 가져오기
    };

    fetchData();
  }, []);
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="text-center font-bold mb-2">{t('visitorCounter')}</div>
      <div className="text-center">{t('todaysVisitor')}: 10</div>
      <div className="text-center mt-2">{t('totalVisitor')}: 1000</div>
    </div>
  );
};

const RecentGuestbook: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
      <div className="text-center font-bold mb-2">{t('recentGuestbook')}</div>
      <div className="text-center"></div>
    </div>
  );
};

const CommentSection: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
      <div className="text-center font-bold mb-2">{t('comments')}</div>
      <div className="text-center">{t('noComments')}</div>
    </div>
  );
};

const Advertisement: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
      <div className="text-center font-bold mb-2">{t('advertisement')}</div>
      <div className="text-center">{t('couldAdvertisement')}</div>
    </div>
  );
};

const HomeSide: NextPage = () => {
  return (
    <div className="w-full p-4">
      <div className="sticky top-4">
        <VisitorCounter />
        <RecentGuestbook />
        <CommentSection />
        <Advertisement />
      </div>
    </div>
  );
};

export default HomeSide;
