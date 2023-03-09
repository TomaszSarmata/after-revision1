export default function BookItem({ book }) {
  return (
    <div className="w-full bg-red-100">
      <p>{book.title}</p>
      <p>{book.author}</p>
    </div>
  );
}
