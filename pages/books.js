import Link from "next/link";
import BooksGrid from "@/components/books/books-grid";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default function BooksPage() {
  return (
    <div className="w-full">
      <Header title="Books"></Header>
      <div className="w-full max-w-6xl mx-auto mt-8">
        <BooksGrid></BooksGrid>
      </div>
      <Footer href="/" title="Home"></Footer>
    </div>
  );
}
