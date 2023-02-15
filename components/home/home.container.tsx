import HomeIntroduction from './home.introduction';

/* 블로그의 메인 페이지이다. 총 세 군데의 컨테이너로 쪼갤예정이다. 
가로로 3칸으로 나눌 예정이다.
첫번째 칸은 블로그의 소개 및 나의 소개를 할 예정이다.
두번째 칸은 블로그의 카테고리를 보여줄 예정이다. 그리고 글들을 보여줄 예정이다.
세번째 칸은 블로그의 최근 글들, 조회수, 광고를 위함이다.
*/
const HomeContainer = () => {
  return (
    <>
      <main>
        <div className="flex">
          <div className="w-1/4 p-4">
            <HomeIntroduction />
          </div>
          <div className="w-1/2 p-4">{/* 두 번째 컨테이너 */}</div>
          <div className="w-1/4 p-4">{/* 세 번째 컨테이너 */}</div>
        </div>
      </main>
    </>
  );
};

export default HomeContainer;
