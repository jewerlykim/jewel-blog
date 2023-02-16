import { ga } from 'react-ga';
declare global {
  interface Window {
    ga: typeof ga;
  }
}
