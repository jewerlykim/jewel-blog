import { NextPage } from 'next';
import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>JEWELOG</title>
        <meta name="description" content="Jewel Blog" />
        <link rel="icon" href="/jewel-tiger-logo.png" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
