import Link from "next/link";
import BooksGrid from "@/components/books/books-grid";

export default function BooksPage() {
  return (
    <div className="bg-green-50">
      <div>Books Page</div>
      <BooksGrid></BooksGrid>
      <div>
        <Link href="/">Go back to Home Page</Link>
      </div>
    </div>
  );
}
