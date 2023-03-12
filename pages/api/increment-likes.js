import sql from "@/utils/postrgres";

export default async function handler(req, res) {
  const id = +req.query.id;
  const likes = +req.query.likes;

  if (id === null || id === undefined) {
    res.status(400).json({ message: "Book id is required" });
    return;
  }

  if (likes === null || likes === undefined) {
    res.status(400).json({ message: "Book likes are required" });
    return;
  }

  const books = await sql`
      UPDATE books
      SET
        likes = ${likes}
      WHERE id = ${id}
  `;
  res.json({ message: "Number of likes updated" });
}
