import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import HomeContainer from '../components/home/home.container';

// 블로그의 메인 페이지
const Home: NextPage = () => {
  return (
    <>
      <main className="min-h-screen">
        <HomeContainer />
      </main>
    </>
  );
};

export default Home;
