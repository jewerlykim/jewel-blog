import type { Metadata } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Providers from '../components/providers';
import '../styles/globals.css';

const nanumsquare = localFont({
  src: [
    {
      path: '../fonts/NanumSquareL.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/NanumSquareR.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NanumSquareB.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-nanumsquare',
});

export const metadata: Metadata = {
  title: 'JEWELOG',
  description: 'Jewel Blog',
  icons: {
    icon: '/jewel-tiger-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={nanumsquare.variable}>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `,
          }}
        />
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
