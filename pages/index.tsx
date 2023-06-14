import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import HomeContainer from '../components/home/home.container';

// 블로그의 메인 페이지
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://godjewel.co.kr/" />
        <meta
          property="og:image"
          content="https://github.com/jewerlykim/jewel-blog/assets/75651834/9e699ea1-8a28-401f-9657-f6edcf3b08c9"
        />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="640" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>JewelLog</title>
      </Head>
      <main className="min-h-screen">
        <HomeContainer />
      </main>
    </>
  );
};

export default Home;
