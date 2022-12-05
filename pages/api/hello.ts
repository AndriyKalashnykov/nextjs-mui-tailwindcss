// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getLogger} from "../../logging/log-util";

const logger = getLogger("hello");

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  logger.info("hello/handler");
  res.status(200).json({ name: 'John Doe 1' })
}
