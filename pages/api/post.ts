import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import PostData from '../../types/PostData';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData>,
) {
  let { slug } = req.query;

  // slug를 string으로 변환
  slug = (Array.isArray(slug) ? slug[0] : slug) as string;

  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const result = remark().use(html).processSync(content).toString();
  const contentHtml = `
    <h1>${data.title}</h1>
    <p>${data.date}</p>
    ${result}
  `;

  res.status(200).json({
    title: data.title,
    date: data.date,
    thumbnail: data.thumbnail,
    contentHtml,
    slug,
    category: data.category,
    tags: data.tags,
  });
}
