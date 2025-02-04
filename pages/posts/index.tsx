// pages/index.tsx
import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import KakaoAdfit from '../../components/kakao.adfit';
import PostData from '../../types/PostData';
import Image from 'next/image';

const Home: NextPage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts');

      const result = await res.json();

      setPosts(result.data);
    };

    fetchPosts();
  }, []);

  return (
    <main>
      <div className="flex justify-center">
        <div className="flex flex-col overflow-x-auto h-screen p-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="rounded-lg shadow-md flex mb-4 h-[100px] overflow-hidden mx-[10%] text-black"
            >
              <div className="w-max mr-4 flex justify-center">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={100}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="w-2/3 flex flex-col justify-center">
                <div>
                  {/* <span
                    className={`text-${getCategoryColor(
                      post.category,
                    )} text-sm sm:text-lg font-bold`}
                  >
                    {post.category}
                  </span> */}
                  <h2 className="text-sm sm:text-lg font-bold mb-2">
                    {post.title}
                  </h2>
                  {/* <p className="text-gray-500 mb-2">{post.date}</p> */}
                  {/* <p>{post.content}</p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="hidden sm:block pr-4">
          <KakaoAdfit
            width={160}
            height={600}
            adUnitId={'DAN-MgE7bFAqCcY6fPQK'}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
