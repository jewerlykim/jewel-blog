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
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { error: 'Post ID is required' },
      { status: 400 },
    );
  }

  try {
    const posts = await reader.collections.posts.all();

    let post = null;
    const idAsNumber = parseInt(id, 10);

    if (!isNaN(idAsNumber) && idAsNumber >= 0 && idAsNumber < posts.length) {
      post = posts[idAsNumber];
    } else {
      post = posts.find((p: { slug: string }) => p.slug === id);
    }

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 },
      );
    }

    const content = await post.entry.content();

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
