import sql from "@/utils/postrgres";

export default async function handler(req, res) {
  const messages = await sql`
        select * from contact_messages
    `;

  res.json({ messages: messages });
}
