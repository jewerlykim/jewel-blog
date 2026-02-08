'use client';

import Link from 'next/link';

const Footer = () => (
  <footer className="border-t border-border w-full pt-16 pb-8 px-6 sm:px-12 lg:px-20">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col gap-3">
          <a
            href="https://www.linkedin.com/in/jewel-kim/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-text-secondary hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jewerlykim"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-text-secondary hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/GODJEWELKBS"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-text-secondary hover:text-white transition-colors"
          >
            X
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/insights"
            className="text-sm text-text-secondary hover:text-white transition-colors"
          >
            Insights
          </Link>
          <a
            href="mailto:jewel@godjewel.co.kr"
            className="text-sm text-text-secondary hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/about"
            className="text-sm text-text-secondary hover:text-white transition-colors"
          >
            About
          </Link>
        </div>
      </div>

      <div className="text-sm text-text-secondary">
        Jewel
      </div>
    </div>
  </footer>
);

export default Footer;
