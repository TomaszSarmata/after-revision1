import sql from "@/utils/postrgres";

export default async function handler(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  if (name === undefined) {
    res.status(400).json({ message: "Name is required" });
    return;
  }

  if (email === undefined) {
    res.status(400).json({ message: "Email is required" });
    return;
  }

  if (message === undefined) {
    res.status(400).json({ message: "Message is required" });
    return;
  }

  const submit = await sql`
    insert into contact_messages
        (name, email, message)
    values
        (${name}, ${email}, ${message})
  `;
  res.json({ message: "success" });
}
