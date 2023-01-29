import Image from 'next/image';

const Navbar = () => {
  return (
    <main>
      <div>
        <nav className="bg-white shadow py-4 ">
          <div className="px-8 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <a className="flex-shrink-0" href="/">
                  <Image
                    src="/favicon-32x32.png"
                    width={32}
                    height={32}
                    alt="logo"
                  />
                </a>
                <div className="">
                  <div className="flex items-baseline ml-10 space-x-4">
                    <a
                      className="text-gray-300  hover:text-gray-800 px-3 py-2 rounded-md text-md font-medium"
                      href="/"
                    >
                      홈
                    </a>
                    <a
                      className="text-gray-800 hover:text-gray-800 px-3 py-2 rounded-md text-md font-medium"
                      href="/category"
                    >
                      카테고리
                    </a>
                    <a
                      className="text-gray-300  hover:text-gray-800 px-3 py-2 rounded-md text-md font-medium"
                      href="/guestbook"
                    >
                      방명록
                    </a>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="flex -mr-2">
                  <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                    <div className=" relative ">
                      <input
                        type="text"
                        id='"form-subscribe-Search'
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="검색 내용"
                      />
                    </div>
                    <button
                      className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                      type="submit"
                    >
                      검색
                    </button>
                  </form>
                </div>
                <div className="flex items-center ml-4 md:ml-6"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
};

export default Navbar;
