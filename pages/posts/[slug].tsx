import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { join } from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import PostData from '../../types/PostData';
import Image from 'next/image';
import { DiscussionEmbed } from "disqus-react";
import KakaoAdfit from '../../components/kakao.adfit';
import { NextSeo } from 'next-seo';


interface Params extends ParsedUrlQuery {
    slug: string;
}


interface Props {
    post: PostData;
}


const Post: NextPage<Props> = ({ post }) => {
    const disqusShortname = "https-www-godjewel-co-kr";
    const disqusConfig = {
        url: `https://www.godjewel.co.kr/posts/${post.slug}`,
        identifier: post.slug,
        title: post.title,
        language: "ko_KR",
    };








    return (
        <>
            <NextSeo
                title={post.title}
                description={`${post.title} - ${post.category}`}
                openGraph={{
                    title: post.title,
                    description: `${post.title} - ${post.category}`,
                    images: [
                        {
                            url: post.thumbnail,
                            width: 800,
                            height: 600,
                            alt: post.title,
                        },
                    ],
                    site_name: 'godjewel',
                    article: {
                        tags: post.tags.split(', '),
                    }
                }}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: post.tags,
                    }
                ]}
                twitter={{
                    handle: '@GODJEWELKBS',
                    site: '@GODJEWELKBS',
                    cardType: 'summary_large_image',
                }}


            />

            <div className='flex'>


                <div className="mx-auto w-screen sm:w-[80%] px-[10%] pt-4 space-y-4">
                    <div className="text-2xl font-bold text-center">{post.title}</div>
                    <div className="text-gray-500 text-center">{post.date}</div>
                    {post.thumbnail && (
                        <div className='flex justify-center items-center'>
                            <Image
                                src={post.thumbnail}
                                alt="thumbnail"
                                width={800}
                                height={600}
                                className="object-cover shadow-xl rounded-3xl"
                            />
                        </div>

                    )}
                    <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} children={
                        `${post.contentHtml}`} />
                    <hr className="my-4 border-gray-300" />
                    <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </div>
                <div className="mr-4 hidden sm:block">
                    <KakaoAdfit width={160} height={600} adUnitId={"DAN-cNYOFcyV57Xyqoof"} />
                </div>
            </div>
        </>
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

    // const result = await remark().use(html).use(gfm).use(breaks).process(content);
    // const contentHtml = result.toString();

    const post: PostData = {
        title: data.title,
        date: data.date,
        contentHtml: content,
        thumbnail: data.thumbnail,
        slug: params.slug,
        category: data.category,
        tags: data.tags,
    };



    return {
        props: {
            post,
        },
    };
};

export default Post;
