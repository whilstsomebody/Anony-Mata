import type { NextApiRequest, NextApiResponse } from 'next';

// Lightweight debug endpoint for inspecting raw incoming payloads during development.
// Returns the parsed body and a short summary.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const now = new Date().toISOString();
  const payload = req.method === 'POST' ? req.body : req.query;
  const summary = {
    method: req.method,
    length: JSON.stringify(payload).length,
    receivedAt: now,
  };
  // Avoid logging sensitive fields in production — this is for local debugging only.
  // eslint-disable-next-line no-console
  console.debug('[/api/debug] payload summary:', summary);
  res.status(200).json({ ok: true, summary, payload });
}
