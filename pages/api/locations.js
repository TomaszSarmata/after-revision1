import sql from "@/utils/postrgres";

export default async function handler(req, res) {
  const search = req.query.search;

  let locations = [];

  if (search === null || search === undefined) {
    locations = await sql`
      select * from locations
    `;
  } else {
    locations = await sql`
      select * from locations
      where title LIKE ${search}
    `;
  }

  // const locations = [
  //   {
  //     id: "manchester",
  //     title: "Manchester",
  //     vistitedDate: "last week",
  //     imgUrl: "/assets/manchester.png",
  //   },
  //   {
  //     id: "singapore",
  //     title: "Singapore",
  //     vistitedDate: "last year",
  //     imgUrl: "/assets/singapore.png",
  //   },
  //   {
  //     id: "san-francisco",
  //     title: "San Francisco",
  //     vistitedDate: "Jan 2022",
  //     imgUrl: "/assets/san-francisco.png",
  //   },
  // ];

  res.json(locations);
}
