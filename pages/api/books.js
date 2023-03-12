import sql from "@/utils/postrgres";
export default async function handler(req, res) {
  const initialBooks = await sql`
      SELECT * FROM books
  `;

  // const initialBooks = [
  //   {
  //     id: "1",
  //     title: "The Hobbit",
  //     author: "J.R.R. Tolkien",
  //     imgUrl: "/assets/1.png",
  //     linkToPurchase: "https://amzn.eu/d/9lMfPCF",
  //   },
  //   {
  //     id: "2",
  //     title: "The Fellowship of the Ring",
  //     author: "J.R.R. Tolkien",
  //     imgUrl: "/assets/2.png",
  //     linkToPurchase: "https://amzn.eu/d/9lMfPCF",
  //   },
  //   {
  //     id: "3",
  //     title: "Born a Crime",
  //     author: "Trevor Noah",
  //     imgUrl: "/assets/3.png",
  //     linkToPurchase: "https://amzn.eu/d/9lMfPCF",
  //   },
  // ];

  res.json(initialBooks);
}
