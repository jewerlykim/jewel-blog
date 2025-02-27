// pages/posts/[id].ts
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import { DiscussionEmbed } from 'disqus-react';
import KakaoAdfit from '../../components/kakao.adfit';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import PostData from '../../types/PostData';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Post: NextPage = () => {
  const [post, setPost] = useState<PostData | null>(null);

  const [disqusShortname, setDisqusShortname] = useState<string>('');
  const [disqusConfig, setDisqusConfig] = useState<{
    url: string;
    identifier: string;
    title: string;
    language: string;
  }>({
    url: '',
    identifier: '',
    title: '',
    language: '',
  });

  const id = useSearchParams().get('id') || '';

  const fetchPost = async () => {
    const res = await fetch('/api/posts/' + id);
    const post = await res.json();

    setPost(post.data);
  };

  const fetchComments = async () => {
    setDisqusShortname('https-godjewel-co-kr');
    setDisqusConfig({
      url: 'https://www.godjewel.co.kr/posts/' + id,
      identifier: `godjewel-posts-${id}`,
      title: 'post',
      language: 'ko_KR',
    });
  };

  useEffect(() => {
    if (!id) return;
    fetchPost();
    fetchComments();
  }, [id]);

  return (
    <>
      <NextSeo
        title={post?.title}
        description={`${post?.title}`}
        openGraph={{
          title: post?.title,
          description: `${post?.title}`,
          images: [
            {
              url: post?.image || '',
              width: 800,
              height: 600,
              alt: post?.title,
            },
          ],
          site_name: 'godjewel',
        }}
        twitter={{
          handle: '@GODJEWELKBS',
          site: '@GODJEWELKBS',
          cardType: 'summary_large_image',
        }}
      />

      <div className="flex">
        <div className="mx-auto w-screen sm:w-[80%] px-[10%] pt-4 space-y-4">
          <div className="text-2xl font-bold text-center">{post?.title}</div>
          {/* <div className="text-gray-500 text-center">{post.date}</div> */}
          {post?.image && (
            <div className="flex justify-center items-center">
              <Image
                src={post.image}
                alt="thumbnail"
                width={800}
                height={600}
                className="object-cover shadow-xl rounded-3xl"
              />
            </div>
          )}
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {post?.content || ''}
          </ReactMarkdown>
          <hr className="my-4 border-gray-300" />
          {id && (
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          )}
        </div>
        <div className="mr-4 hidden sm:block">
          <KakaoAdfit
            width={160}
            height={600}
            adUnitId={'DAN-cNYOFcyV57Xyqoof'}
          />
        </div>
      </div>
    </>
  );
};

export default Post;
