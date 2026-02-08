import { ReactNode } from 'react';
import KeystaticApp from './keystatic-app';

interface LayoutProps {
  children?: ReactNode;
}

const KeystaticLayout = ({ children }: LayoutProps) => (
  <KeystaticApp />
);

export default KeystaticLayout;
