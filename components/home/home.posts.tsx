import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const PopularPosts: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-lg font-bold">{t('popularPostsTitle')}</div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-gray-400"></div>
          <div>{t('popularPosts.post1')}</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-gray-400"></div>
          <div>{t('popularPosts.post2')}</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-gray-400"></div>
          <div>{t('popularPosts.post3')}</div>
        </div>
      </div>
    </div>
  );
};

const RecentPosts: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-lg font-bold">{t('recentPostsTitle')}</div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-gray-400"></div>
          <div>{t('recentPosts.post1')}</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-gray-400"></div>
          <div>{t('recentPosts.post2')}</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-gray-400"></div>
          <div>{t('recentPosts.post3')}</div>
        </div>
      </div>
    </div>
  );
};

const HomePosts: NextPage = () => {
  return (
    <div className="flex flex-col space-y-10">
      <PopularPosts />
      <RecentPosts />
    </div>
  );
};

export default HomePosts;
