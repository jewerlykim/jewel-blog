import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PostData from '../../types/PostData';
import Link from 'next/link';
import Image from 'next/image';
import KakaoAdfit from '../kakao.adfit';

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
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts');
      const posts = await res.json();

      setPosts(posts.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      <div className="text-lg font-bold">{t('recentPostsTitle')}</div>
      <div className="grid gap-4 md:grid-cols-2 items-center">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-md cursor-pointer">
              <div className="h-48">
                <Image
                  src={post.image}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="absolute top-0 left-0 opacity-70"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col text-white font-bold text-2xl p-4">
                <div>{post.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const HomePosts: NextPage = () => {
  return (
    <div className="flex flex-col space-y-10">
      {/* <PopularPosts /> */}
      <RecentPosts />
    </div>
  );
};

export default HomePosts;
