import Header from "@/components/shared/header";
import Hero from "@/components/home/hero";
import Footer from "@/components/shared/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SingleBook() {
  const router = useRouter();
  const [singleBook, setSingleBook] = useState(null);

  const { bookId } = router.query;

  useEffect(() => {
    if (!bookId) {
      return;
    }
    getSingleBook(bookId);
  }, [bookId]);

  const getSingleBook = async (id) => {
    const response = await fetch(`/api/book-by-id?id=${id}`);
    const data = await response.json();
    const { book } = data;
    setSingleBook(book);
  };

  console.log(singleBook);

  if (!singleBook) {
    return <div>Loading...</div>;
  }

  //TODO make another sanity check to make sure we get an error for the user coming from the endpoint if the singleBook.id goes beyond the array.length (problem: how to refer to the array if its not imported here)

  return (
    <div>
      <Header title={singleBook.title}></Header>
      <Hero
        imgUrl={singleBook.imgUrl}
        title={singleBook.title}
        subtitle={singleBook.author}
      ></Hero>
      <Footer
        href={`/single-book/${+singleBook.id + 1}`}
        title="Next Book"
      ></Footer>
    </div>
  );
}
