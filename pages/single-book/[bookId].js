import Header from "@/components/shared/header";
import Hero from "@/components/home/hero";
import Footer from "@/components/shared/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Content from "@/components/shared/content";
import { CopyToClipboard } from "react-copy-to-clipboard";

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

  console.log("here", singleBook);

  return (
    <div>
      <Header title={singleBook.title}></Header>
      <Hero
        imgUrl={singleBook.img_url}
        title={singleBook.title}
        subtitle={singleBook.author}
      ></Hero>

      <Content>
        <div className="w-full flex flex-col ">
          <div className="w-full">
            <CopyToClipboard text={singleBook.linkToPurchase}>
              <button
                className="bg-blue-500 text-white rounded-lg text-center w-2/12 mb-5 py-1"
                type="button"
              >
                Copy link to Amazon
              </button>
            </CopyToClipboard>
          </div>
          <div className="bg-blue-500 rounded-lg text-center text-white w-2/12 py-1">
            <a href={singleBook.linkToPurchase} target="_blank">
              Buy on Amazon
            </a>
          </div>
        </div>
      </Content>
      <Footer
        href={`/single-book/${+singleBook.id + 1}`}
        title="Next Book"
      ></Footer>
    </div>
  );
}
