import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        blogIntroduction: '',
        visitorCounter: 'Visitor Counter',
        todaysVisitor: "Today's Visitor",
        totalVisitor: 'Total Visitor',
        recentGuestbook: 'Recent Guestbook',
        comments: 'Comments',
        noComments: 'No comments yet',
        advertisement: 'Advertisement',
        couldAdvertisement: 'This could be an ad for a product or service.',
      },
    },
    ko: {
      translation: {
        blogIntroduction:
          '쥬얼 블로그에서는 프론트엔드, 백엔드, 데이터베이스, 블록체인 등 다양한 개발 분야에 대한 글을 다루고 있습니다.',
        popularPostsTitle: '인기 글',
        recentPostsTitle: '최신 글',
        visitorCounter: '방문자 수',
        todaysVisitor: '오늘의 방문자',
        totalVisitor: '총 방문자',
        recentGuestbook: '최근 방명록',
        comments: '댓글',
        noComments: '아직 댓글이 없습니다',
        advertisement: '광고',
        couldAdvertisement:
          '이 곳에는 상품이나 서비스에 대한 광고가 표시됩니다.',
      },
    },
  },
  lng: 'ko',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
