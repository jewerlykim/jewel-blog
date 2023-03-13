import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostData from '../../types/PostData';
import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD'],
  origin: ['https://www.godjewel.co.kr', 'https://godjewel.co.kr'],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function,
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData[]>,
) {
  await runMiddleware(req, res, cors);
  // CORS 헤더 설정

  res.setHeader('Access-Control-Allow-Origin', [
    'https://www.godjewel.co.kr',
    'https://godjewel.co.kr',
  ]);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type',
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');

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

  res.status(200).json(postsData);
}
