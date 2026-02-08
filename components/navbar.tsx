'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

const Navbar = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLink[] = [
    { href: '/', label: '홈' },
    { href: '/projects', label: '프로젝트' },
    { href: '/posts', label: '포스트' },
    { href: '/guestbook', label: '방명록' },
    { href: '/about', label: '소개' },
    { href: '/prototype', label: '프로토타입' },
  ];

  const isActive = (href: string): boolean => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  const getLinkClasses = (href: string): string => {
    const baseClasses =
      'text-sm font-medium px-3 py-2 rounded-md transition-all duration-200';
    const activeClasses = isActive(href)
      ? 'text-accent bg-surface-elevated'
      : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50';
    return `${baseClasses} ${activeClasses}`;
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-surface/95 backdrop-blur-md border border-border rounded-lg shadow-lg">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity">
            <Image
              src="/jewel-tiger-logo-big.png"
              width={40}
              height={40}
              alt="JEWELOG logo"
            />
            <h1 className="text-text-primary font-bold text-lg hidden sm:block">
              JEWELOG
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={getLinkClasses(link.href)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="sm:hidden border-t border-border mt-4 pt-4"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${getLinkClasses(link.href)} block w-full text-left`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
