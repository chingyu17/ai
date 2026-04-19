// 注意：你需要安裝 openai 套件
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { message } = req.body;
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: message }],
    model: "gpt-4o",
  });
  
  res.status(200).json({ reply: completion.choices[0].message.content });
}
