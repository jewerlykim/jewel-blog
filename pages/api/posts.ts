import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostData from '../../types/PostData';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData[]>,
) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const postsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      title: data.title,
      date: data.date,
      thumbnail: data.thumbnail,
      slug,
      contentHtml: '',
    };
  });

  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', 'https://www.godjewel.co.kr');

  res.status(200).json(postsData);
}
