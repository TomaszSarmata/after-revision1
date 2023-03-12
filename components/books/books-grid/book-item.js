import { useState } from "react";
import Link from "next/link";

export default function BookItem({ book }) {
  const [like, setLike] = useState(+book.likes);

  const handleLike = async () => {
    let newValue = like + 1;
    setLike(newValue); //lazy upload here
    const id = +book.id;
    const response = await fetch(
      `/api/increment-likes?id=${id}&likes=${newValue}`
    );
    const data = await response.json();
  };

  return (
    <div className="w-full border rounded-lg p-4 flex flex-col justify-center items-center gap-y-1">
      <Link href={`/single-book/${book.id}`}>
        <img src={book.img_url} className="rounded-lg" />
      </Link>
      <p className="text-center text-xl font-medium ">{book.title}</p>
      <p className="text-center text-gray-700">{book.author}</p>
      <button
        type="button"
        onClick={handleLike}
        className="bg-blue-500 rounded-lg px-3 py-1"
      >
        <span className="text-white">Like ({like} likes)</span>
      </button>
    </div>
  );
}
