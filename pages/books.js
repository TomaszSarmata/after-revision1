import Link from "next/link";

export default function BooksPage() {
  return (
    <div>
      <div className="bg-green-50">Books Page</div>
      <div>
        <Link href="/">Go back to Home Page</Link>
      </div>
    </div>
  );
}
