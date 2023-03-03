import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { join } from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import PostData from '../../types/PostData';
import Image from 'next/image';

interface Params extends ParsedUrlQuery {
    slug: string;
}


interface Props {
    post: PostData;
}

const Post: NextPage<Props> = ({ post }) => {
    return (
        <div className="mx-auto max-w-screen-lg px-[10%] pt-4 space-y-4">
            <div className="text-2xl font-bold">{post.title}</div>
            <div className="text-gray-500">{post.date}</div>
            {post.thumbnail && (
                <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                    <Image
                        src={post.thumbnail}
                        alt="thumbnail"
                        layout="fill"
                        objectFit="cover"
                        className="absolute top-0 left-0"
                    />
                </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const postsDirectory = join(process.cwd(), 'posts');
    const filenames = await fs.readdir(postsDirectory);

    const slugs = filenames.map(filename => {
        const slug = filename.replace(/\.md$/, '');
        return slug;
    });

    const paths = slugs.map(slug => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
    params,
}) => {
    // params를 undefined에서 벗어나게 하기
    if (!params) {
        throw new Error('params is undefined');
    }

    const postsDirectory = join(process.cwd(), 'posts');
    const filePath = join(postsDirectory, `${params.slug}.md`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const result = await remark().use(html).process(content);
    const contentHtml = result.toString();

    const post: PostData = {
        title: data.title,
        date: data.date,
        contentHtml,
        thumbnail: data.thumbnail,
        slug: params.slug,
    };



    return {
        props: {
            post,
        },
    };
};

export default Post;
