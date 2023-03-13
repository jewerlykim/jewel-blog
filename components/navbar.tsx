import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <main>
      <div>
        <nav className="bg-white shadow py-4 ">
          <div className="px-8 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a className="flex items-center" href="/">
                  <Image
                    src="/jewel-tiger-logo-big.png"
                    width={50}
                    height={50}
                    alt="logo"
                  />
                  <h1>
                    JEWELOG
                  </h1>
                </a>
                <div className="">
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
              </div>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
