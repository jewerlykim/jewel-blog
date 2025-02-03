import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';

type Data = {
  data?: any;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // URL 파라미터로 전달된 id를 추출합니다.
  const { id } = req.query;
  console.log(id);
  if (!id) {
    return res.status(400).json({ error: 'Post ID is required' });
  }

  // posts 테이블에서 해당 id의 게시글을 조회합니다.
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ data });
}
