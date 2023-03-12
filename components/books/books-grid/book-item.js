import { useState } from "react";

export default function BookItem({ book }) {
  const [like, setLike] = useState(0);

  const handleLike = () => {
    let newValue = like + 1;
    setLike(newValue);
  };

  return (
    <div className="w-full border rounded-lg p-4 flex flex-col justify-center items-center gap-y-1">
      <img src={book.img_url} className="rounded-lg" />
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
