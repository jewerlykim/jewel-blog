---
title: 내 개인 블로그 만들기(Next.js, Typescript, MD, Vercel)- 1(시작)

date: '2023-03-19'

thumbnail: https://cdn.discordapp.com/attachments/997271616234995782/1086878412502732840/Jewel_Enchanted_woodland_filled_with_levitating_landmasses_and__319a8b2d-3f5a-4bcf-8514-003acb5d4643.png

category: '기술'

tags: 'blog culture, sharing knowledge, velog, Next.js, framework, vercel, API, markdown, getStaticProps, web development, frontend, route, file system, CMS, AWS, S3, SOP, CORS, developer, hackerthon,  블로그 문화, 지식 공유, 벨로그, Next.js, 프레임워크, 버셀, API, 마크다운, getStaticProps, 웹 개발, 프론트엔드, 라우트, 파일 시스템, CMS, AWS, S3, SOP, CORS, 개발자, 해커톤'
---

**1. 시작하며**
나는 소프트웨어 개발을 2020년 12월에 처음 접하게 되었다. 물론, 그 전에 학교 교양 수업으로 C++ 강의를 들어보긴 했으나(재수강으로 두 번 들었다), 그 컴퓨터 언어가 무엇에 쓰이는지, 어떻게 쓰이는지 전혀 알지 못한 채 의무감에 들었다. 2020년 12월 추운 대전의 한 도시에서 처음 '진정' 개발에 대해 알게 되었고, 그때 개발자들의 블로그 문화에 대해서 깊이 감명받게 되었다.

자신이 아는 것을 남과 서슴없이 공유하는 문화, 내가 소위 '삽질'한 내용을 공유하고, 앞으로의 발전을 도모하겠다는 공표를 할 수 있는, 누구에게나 공개하는 일기장의 산물이 블로그라는 형태로 존재하는 것이었다. 그 전까지는 블로그는 네이버 블로그 등을 보며 맛집을 알려주고, 상품을 광고하는 단순한 홍보의 창 정도로 생각했으니, 생각의 전환이었다. 그래서 나도 벨로그(velog)를 통해 블로그를 시작하였고, 총 29개의 글을 남겼었다. 하지만, 취직을 하고 시간이 없다는 핑계로 꾸준한 글쓰기를 하지 못하였다. 지금 생각해보면 글 쓰기를 하기 귀찮아서 그랬었다.

블록체인 업계에 입문하고 어떤 사람을 한명 만났다. 나이는 동갑이신 분인데 이미 사업체를 꾸리고 있는 대표님이었다. 내 인생 처음으로 참가했던 해커톤에서 만난 분인데, 그 당시 해커톤의 수상자이기도 하셨다. 덕분에 대표님의 발표를 들어볼 수 있었고, 인상깊게 발표를 들었다. 처음 사업 자금을 마련하게 된 계기가 다름 아닌 블로그라고 한다.그는, 스마트 스토어사업, 대행 구매 사업 등을 하셨고, 블로그도 하셨는데 그 블로그의 트래픽을 이용한 광고사업으로 월 1천만원 이상의 순수익을 내셨다고 한다. 그의 열정과 블로그 수익(?)에 감명받은 나는 어렵게 수소문하여 그분의 사무실을 다짜고짜 찾아가 커피 한잔을 대접하며 열정을 어느정도 전수받았다.

그 사건이 나를 다시 키보드 앞에 자리 잡게 하여 준 트리거가 되었다. 다시금 블로그를 시작해 보겠노라, 또 이번에는 꾸준하게 해보겠노라, 그리고 이번엔 수익도 한번 내보자. 하는 마음으로 시작하게 되었다. 나름 마지막 회사에서 블록체인, 웹 프론트엔드, 웹서버 백엔드, DB, AWS 인프라까지 모두 책임을 가졌던 만큼, 최대한 프레임워크의 도움 없이 내가 자유롭게 커스텀 하면서 블로그 혹은 나에 대한 소식 등을 모두 전할 수 있는 블로그 개설을 하고 싶었고 실제 현재 블로그는 워드프레스, cafe24등 블로그 관련 프레임워크를 모두 사용하지 않고 개발을 하게 되었다. 규모가 커지고 나 스스로의 요구 사항이 커지다보면 프레임워크를 한 두개 도입하며 개편될 수도 있지만 지금 글에서는 그렇게 원시적(?)으로 개발한 방법에 대해 차근차근 작성해보려고 한다. 말이 너무나도 길었다. 이제 시작해보려고 한다.

**2. Next.js**
블로그의 프론트엔드 프레임워크로는 Next.js를 선택했다. 가장 큰 이유는 가장 경험이 많은 프레임워크라는 점이 컸다. Next.js의 장점은 검색해보면 무지하게 많이 나오므로 뻔한 얘기는 하지 않고, 나라는 개발자 입장에서 장점을 한번 말해보려고 한다.

**a) 다른 프레임워크와 달리 구조가 간단하다.**
next는 구조가 간단해서 이해가 쉽다. 따라서, 쉽게 입문해서 사용할 수 있다. next는(현재 13ver사용) pages라는 디렉토리 안에 하위 디렉토리를 생성하고 index 파일을 만듦으로서 간단히 route 를 구현할 수 있다. 실제 사용자가 보는 path와 개발자가 개발하는 path가 일치하게 됨으로서 구조 때문에 헷갈릴 일이 덜하다. 실제 블로그의 파일구조를 첨부한다.
![스샷](https://user-images.githubusercontent.com/75651834/226156117-6ca660ce-4906-4f16-b0cb-9b8c953831b6.png)
스크린샷에서 보면 pages아래에 posts, guestbook path가 있는 것을 확인할 수 있고, 각각 index.tsx에서 구현한 페이지가 https://godjewel.co.kr/posts, https://godjewel.co.kr/guestbook 으로 routes가 연결된다. 개발자를 시작할 때 웹개발로 시작하지 않았기 때문에 웹개발을 처음 접했을 때 어려움이 있을 수 있었지만, next의 쉬운 구조 덕분에 이해가 잘되서 금방 웹 개발을 시작할 수 있었던 것 같다.

**b) vercel과의 연계가 된다.**
next는 vercel이라는 회사에서 만든 프레임워크이다. vercel은 현재 github 연동을 통해 깃헙 액션처럼 깃헙에 업로드한 next 프로젝트를 자동 배포 및 일정 부분 무료 배포를 해준다. 자동 배포도 엄청난 이점이지만 무료 배포도 무시할 수 없다. 수익성을 고려하면서 다시 시작한 블로그이기 때문에 지출을 들여가며 시작하고 싶지는 않은 마음이 있어서, 배포를 무료로 할 수 있는 vercel과 next를 선택하였다.
[vercel 바로가기](https://vercel.com/)

**c) 간단한 api 구현이 가능하다**
프론트엔드 프레임워크에서 api 구현이 된다는 것은 또 엄청난 장점이 된다. 이유는 프론트엔드, 웹서버 구현 이렇게 두가지를 구현하는 것이 아니라 한 프로젝트에서 두가지를 동시에 구현할 수 있기 때문이다. vercel에 배포하면 웹서버를 배포하는 것과 같은 효과를 갖는다. 이 부분은 다음 _3번_ 글에서 더 자세히 설명해보도록 한다.

**3 . 블로그 글 저장, 및 인덱스 방식**
이 부분이 가장 고민이 많았던 부분인 것 같다. 아직도 고민을 하고 있기도 하고 앞으로도 고민을 해야하는 부분이다. 내가 고민했던 점은 최대한 귀찮지 않고 쉽고 간단하게 블로그 글을 저장하고 싶다는 점이었다. CMS(contents manage service)도 공부해보고, AWS를 통해서 S3에 글을 저장하고 등등 여러가지를 고민해봤지만 사실 두가지 다 너무 귀찮고 유료였다. 그래서 단순히 file system을 이용해서 할 방법은 없을까 고민했고 결과물은 다음과 같다.

방법은 다음과 같다.
1 . 글은 markdown으로 작성한다.
2 . markdown은 프로젝트의 fs에 그대로 저장한다.
3 . next의 api를 통해서 markdown 정보를 내보낸다.
4 . next의 프론트엔드에서 SOP(Same origin path)인 api로 부터 정보를 받고 화면에 보여준다.

여기서 SOP는 api의 주소와 프론트엔드의 주소가 같다는 의미이다. 그렇게 되면 CORS도 신경 쓸 필요없이 정보를 받을 수 있다. 이렇게 api로 만들어두면 추후 현재 블로그 뿐만 아니라 다른 곳에서도 사용할 수 있게 된다.

**최선인가? 반박 두가지**
최선은 물론 아니다. 1) 확장성을 많이 고려하지 않은 구조라고 생각이 든다. 하지만 처음 시작부터 힘을 너무 빼고 싶지 않았고, 쉽게 시작하고 싶었다. 그런 목표에는 부합한 구조라고 생각한다. 2) 그리고 api 를 만들고 나서 생각한 점은 굳이 api로 만들지 않고 Next의 getStaticProps를 통해 브라우저 창이 로드 되기 전에 미리 글들을 로드해두어도 충분히 구현 가능하다는 생각이 든다.

나중에 블로그의 규모가 더 커져서 더이상 이 구조를 유지하는게 오히려 손해라는 생각이 들면 그때 다시 생각해보려고한다. 그때 한번 글 쓸 날이 오겠지...!

**4 . 결론**
연차로는 4년을 개발을 해왔다. 개발도 많이 하고, 개발 도서도 많이 읽으면서 나름 생각을 정리해보았다. 가장 나은 구조란 무엇인가? 가장 나은 디자인 패턴은 무엇인가? 하는 고민이 들때 나는 정답은 없다고 생각한다. 다만, 개발은 사업 혹은 어떤 목표를 이루기 위한 프로덕트를 만들기 위한 방법이라고 생각한다. 그래서 그때 상황에 가장 이익인(지출은 적고, 상정한 목표를 최대한 이루는) 방법을 택하는게 최선이라고 본다.

예를 들어, 출시가 급하고 상품이 세상에 나오는 것이 조직의 목표인 상황에서 고차원적인 개발을 갖추겠다는 신념으로 출시에 맞추지 못하는 상황에는 아무리 좋은 개발 방법론으로 개발을 해도 상기의 목표를 이루지 못한 실패다. 또, 반대로 최상의 품질을 유지하여 현재 모객된 고객에게 최고의 만족을 이뤄야하며 아직 개발할 여유시간도 있고, 그럴 만한 인력도 있는 팀이라면 시간과 노력을 써서 좋은 개발 방법론으로 최상의 상품을 만드는 것이 좋은 결과를 만들어 낼 것이라 예상된다.

짧은 시간 개발을 해왔지만, 그간 지나온 회사들, 사이드 프로젝트, 해커톤 등을 해오면서 각각의 상황마다 필요한 기술 요구도가 다르다는 생각을 하게 되었다. 계속 커리어를 이어가면서 또 어떤 생각이 들지 모르지만, 계속해서 블로그 등 매체를 통해 공유를 해보려고 한다.

오늘도 글을 읽어주셔서 감사합니다! 더 좋은 글로 찾아 뵙겠습니다. 감사합니다.

어떠한 질문, 인사, 잡담 모두 환영합니다. 댓글 혹은 메일, SNS를 통해 의견 남겨주세요.
