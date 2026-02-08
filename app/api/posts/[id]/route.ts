import { NextResponse } from 'next/server';
import type { NextRequest, NextResponse as NextResponseType } from 'next/server';
import { reader } from '../../../../lib/reader';
import type PostData from '../../../../types/PostData';

type Data = {
  data?: PostData;
  error?: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponseType<Data>> {
  // URL 파라미터로 전달된 id를 추출합니다.
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { error: 'Post ID is required' },
      { status: 400 },
    );
  }

  try {
    // 모든 포스트를 조회합니다.
    const posts = await reader.collections.posts.all();

    // id가 숫자인 경우 인덱스로, 문자열인 경우 slug로 검색합니다.
    let post = null;
    const idAsNumber = parseInt(id, 10);

    if (!isNaN(idAsNumber) && idAsNumber >= 0 && idAsNumber < posts.length) {
      // 숫자 인덱스로 검색
      post = posts[idAsNumber];
    } else {
      // slug로 검색
      post = posts.find((p: { slug: string }) => p.slug === id);
    }

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 },
      );
    }

    // 포스트 콘텐츠를 읽습니다.
    const content = await post.entry.content();

    // PostData 형식으로 변환합니다.
    const data: PostData = {
      id: posts.indexOf(post),
      slug: post.slug,
      title: post.entry.title || '',
      date: post.entry.date || '',
      image: post.entry.image || '',
      content: typeof content === 'string' ? content : '',
      category: post.entry.category || '',
      tags: Array.isArray(post.entry.tags)
        ? post.entry.tags.join(',')
        : '',
    };

    return NextResponse.json<Data>({ data }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json<Data>(
      { error: errorMessage },
      { status: 500 },
    );
  }
}
