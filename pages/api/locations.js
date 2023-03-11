export default function handler(req, res) {
  const locations = [
    {
      id: "manchester",
      title: "Manchester",
      vistitedDate: "last week",
      imgUrl: "/assets/manchester.png",
    },
    {
      id: "singapore",
      title: "Singapore",
      vistitedDate: "last year",
      imgUrl: "/assets/singapore.png",
    },
    {
      id: "san-francisco",
      title: "San Francisco",
      vistitedDate: "Jan 2022",
      imgUrl: "/assets/san-francisco.png",
    },
  ];

  res.json(locations);
}
