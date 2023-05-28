import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = router.pathname;

  return (
    <main>
      <div>
        <nav className="bg-white shadow py-4">
          <div className="px-8 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-16 ">
              <div className="sm:hidden" />

              <a className="flex items-center" href="/">
                <Image
                  src="/jewel-tiger-logo-big.png"
                  width={50}
                  height={50}
                  alt="logo"
                />
                <h1 className="text-black my-auto">
                  JEWELOG
                </h1>
              </a>
              {/* 메뉴 */}
              <div className="hidden sm:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <a
                    className={`text-md font-medium px-3 py-2 rounded-md ${currentPath === "/" ? "text-gray-800" : "text-gray-300"
                      } hover:text-gray-800`}
                    href="/"
                  >
                    홈
                  </a>
                  <a
                    className={`text-md font-medium px-3 py-2 rounded-md ${currentPath === "/posts"
                      ? "text-gray-800"
                      : "text-gray-300"
                      } hover:text-gray-800`}
                    href="/posts"
                  >
                    포스트
                  </a>
                  <a
                    className={`text-md font-medium px-3 py-2 rounded-md ${currentPath === "/guestbook"
                      ? "text-gray-800"
                      : "text-gray-300"
                      } hover:text-gray-800`}
                    href="/guestbook"
                  >
                    방명록
                  </a>
                </div>

              </div>





              <div className="sm:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Hamburger Icon */}
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} absolute border-2 rounded bg-white right-2 top-[8%] z-10 shadow`}>

                <a
                  className={`text-md font-medium px-3 py-2 rounded-md ${currentPath === "/" ? "text-gray-800" : "text-gray-300"
                    } hover:text-gray-800 block`}
                  href="/"
                >
                  홈
                </a>
                <a
                  className={`text-md font-medium block px-3 py-2 rounded-md ${currentPath === "/posts"
                    ? "text-gray-800"
                    : "text-gray-300"
                    } hover:text-gray-800`}
                  href="/posts"
                >
                  포스트
                </a>
                <a
                  className={`text-md font-medium block bg-white px-3 py-2 rounded-md ${currentPath === "/guestbook"
                    ? "text-gray-800"
                    : "text-gray-300"
                    } hover:text-gray-800`}
                  href="/guestbook"
                >
                  방명록
                </a>

              </div>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
