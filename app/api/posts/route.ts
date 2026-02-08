import { NextResponse } from 'next/server';
import { reader } from '../../../lib/reader';
import PostData from '../../../types/PostData';

type Data = {
  data?: PostData[];
  error?: string;
};

export async function GET() {
  try {
    const posts = await reader.collections.posts.all();

    const data: PostData[] = posts.map((post, index) => ({
      id: index,
      slug: post.slug,
      title: post.entry.title || '',
      date: post.entry.date || '',
      image: post.entry.image || '/jewel-tiger-logo-big.png',
      content: '',
      category: post.entry.category || '',
      tags: Array.isArray(post.entry.tags)
        ? post.entry.tags.join(',')
        : '',
    }));

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
