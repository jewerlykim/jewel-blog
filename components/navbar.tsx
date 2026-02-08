'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Writing' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/prototype', label: 'Prototype' },
];

const Navbar = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-8 bg-[#111]/80 backdrop-blur-md rounded-full px-6 py-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm text-text-secondary hover:text-white transition-colors"
          >
            Menu
          </button>

          <Link
            href="/"
            className="font-serif text-base font-medium text-white tracking-wide"
          >
            Jewel
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/posts"
              className="text-text-secondary hover:text-white transition-colors"
              aria-label="Writing"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
            <a
              href="mailto:jewel@godjewel.co.kr"
              className="text-text-secondary hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-text-secondary hover:text-white text-sm transition-colors"
          >
            Close
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl sm:text-5xl font-serif transition-colors ${
                  currentPath === link.href ||
                  (link.href !== '/' && currentPath.startsWith(link.href))
                    ? 'text-white'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
