import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

type ResponseData = {
  data?: any;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { title, content, image } = req.body;

  if (!title || !content || !image) {
    return res
      .status(400)
      .json({ error: '제목, 내용, 이미지 URL을 모두 입력해 주세요.' });
  }

  const { data, error } = await supabase
    .from('posts')
    .insert([{ title, content, image }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ data });
}
