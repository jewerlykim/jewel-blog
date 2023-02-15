import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        blogIntroduction: '',
      },
    },
    ko: {
      translation: {
        blogIntroduction:
          '쥬얼 블로그에서는 프론트엔드, 백엔드, 데이터베이스, 블록체인 등 다양한 개발 분야에 대한 글을 다루고 있습니다.',
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
