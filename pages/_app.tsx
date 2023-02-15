import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import i18n from '../utils/i18n';
import { I18nextProvider } from 'react-i18next';
import localFont from '@next/font/local';

const nanumSquare = localFont({
  src: [
    {
      path: './NanumSquareB.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './NanumSquareR.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './NanumSquareL.otf',
      weight: '300',
      style: 'normal',
    },
  ],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={nanumSquare.className}>
      <Layout>
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nextProvider>
      </Layout>
    </main>
  );
}

export default MyApp;
