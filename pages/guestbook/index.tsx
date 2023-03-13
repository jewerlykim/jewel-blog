import { NextPage } from "next";
import { DiscussionEmbed } from "disqus-react";


const Home: NextPage = () => {
    const disqusShortname = "https-www-godjewel-co-kr";
    const disqusConfig = {
        url: "https://www.godjewel.co.kr/",
        identifier: "guestbook",
        title: "방명록",
        language: "ko_KR",
    };


    return (
        <main>
            <div className="mx-[10%] mt-10 bg-gray-100 border border-gray-300 p-4">
                <h1 className="text-2xl font-bold mb-4">방명록</h1>
                <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        </main>
    );
};

export default Home;
