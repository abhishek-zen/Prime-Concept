import type { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../server/index-prod'; // expects server to export the express app

// export default handler for @vercel/node
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // express app is a function (req,res) so forward directly
  return app(req as any, res as any);
}
