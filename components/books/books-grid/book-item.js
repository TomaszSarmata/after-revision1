export default function BookItem({ book }) {
  return (
    <div className="w-full border rounded-lg p-4">
      <img src={book.imgUrl} className="rounded-lg" />
      <p className="text-center text-xl font-medium ">{book.title}</p>
      <p className="text-center text-gray-700">{book.author}</p>
    </div>
  );
}
