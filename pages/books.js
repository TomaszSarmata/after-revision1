import Link from "next/link";
import BooksGrid from "@/components/books/books-grid";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";

export default function BooksPage() {
  return (
    <div className="w-full">
      <Header title="Books"></Header>
      <Content>
        <BooksGrid></BooksGrid>
      </Content>
      <Footer href="/" title="Home"></Footer>
    </div>
  );
}
