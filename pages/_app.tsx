import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import i18n from '../utils/i18n';
import { I18nextProvider } from 'react-i18next';
import localFont from '@next/font/local';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
  const router = useRouter();

  return (
    <main className={nanumSquare.className}>
      <Layout>
        <I18nextProvider i18n={i18n}>
          <script
            async
            src={
              'https://www.googletagmanager.com/gtag/js?id=' +
              process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
            }
          ></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
              `,
            }}
          ></script>

          <Component {...pageProps} />
        </I18nextProvider>
      </Layout>
    </main>
  );
}

export default MyApp;
