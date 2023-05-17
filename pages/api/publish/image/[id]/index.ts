import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// 쿼리에서 image id를 가져온다.
// id를 이용해서 이미지를 찾는다.
// 이미지를 찾으면 이미지를 반환한다.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const filePath = path.join(process.cwd(), 'publish', `${id}`, 'image.jpg');
  console.log(filePath);
  // Ensure that the file exists before attempting to send it
  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath);
    res.setHeader('Content-Type', 'image/jpg');
    res.status(200).send(fileContents);
  } else {
    res.status(404).send('Image not found');
  }
}
