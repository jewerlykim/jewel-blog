import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import KakaoAdfit from "../../components/kakao.adfit";
import PostData from "../../types/PostData";
import Image from 'next/image';

const Home: NextPage = () => {

    const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('/api/posts');
            const posts = await res.json();
            console.log(`posts is ${JSON.stringify(posts)}`)

            // post를 최신순으로 정렬
            posts.sort((a: any, b: any) => {
                if (a.date < b.date) {
                    return 1;
                } else {
                    return -1;
                }
            });


            setPosts(posts);
        };
        fetchPosts();
    }, []);

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            회고: 'blue-500',
            블록체인: 'green-500',
            프론트엔드: 'yellow-500',
            사업: 'purple-500',
            백엔드: 'red-500',
            개발: 'gray-500',
            독서: 'pink-500',
            기타: 'indigo-500',
            AI: 'orange-500',
        }

        console.log(`category is ${category} and color is ${colors[category]}`)


        return colors[category] || 'gray-500';
    }




    return (
        <main>
            <div className="flex justify-center">
                <div className="flex flex-col overflow-x-auto h-screen p-4 ">
                    {posts.map((post) => (

                        <Link key={post.slug} href={`/posts/${post.slug}`} className="rounded-lg shadow-md flex mb-4 max-h-[20%] overflow-hidden mx-[10%]">
                            <div className="w-max mr-4 flex justify-center">
                                {/* <img
                                    src={post.thumbnail}
                                    alt={post.title}
                                    style={{ height: "100%" }}
                                    className="object-cover"
                                /> */}
                                <Image
                                    src={post.thumbnail}
                                    alt={post.title}
                                    width={100}
                                    height={200}
                                    className="object-cover"
                                >

                                </Image>

                            </div>
                            <div className="w-2/3 flex flex-col justify-center">
                                <div>
                                    <span className={`text-${getCategoryColor(post.category)} text-sm sm:text-lg font-bold`}>{post.category} </span>
                                    <h2 className="text-sm sm:text-lg font-bold mb-2">{post.title}</h2>
                                    <p className="text-gray-500 mb-2">{post.date}</p>
                                    <p>{post.contentHtml}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="hidden sm:block pr-4">
                    <KakaoAdfit width={160} height={600} adUnitId={"DAN-MgE7bFAqCcY6fPQK"} />
                </div>

            </div>
        </main>
    );

}

export default Home;