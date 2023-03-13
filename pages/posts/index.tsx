import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import PostData from "../../types/PostData";

const Home: NextPage = () => {

    const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('/api/posts');
            const posts = await res.json();
            console.log(`posts is ${JSON.stringify(posts)}`)


            setPosts(posts);
        };
        fetchPosts();
    }, []);


    return (
        <main>
            <div className="flex flex-col overflow-x-auto h-screen p-4">
                {posts.map((post) => (

                    <Link key={post.slug} href={`/posts/${post.slug}`} className="rounded-lg shadow-md flex mb-4 max-h-64 overflow-hidden mx-[10%]">
                        <div className="w-max mr-4 flex justify-center">
                            <img
                                src={post.thumbnail}
                                alt={post.title}
                                style={{ height: "100%" }}
                                className="object-cover max-w-full h-auto"
                            />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between">
                            <div>
                                <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                                <p className="text-gray-500 mb-2">{post.date}</p>
                                <p>{post.contentHtml}</p>
                            </div>
                            <div className="mt-4">
                                <hr />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );

}

export default Home;