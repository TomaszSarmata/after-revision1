import Header from "@/components/shared/header";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import { useRouter } from "next/router";
import Hero from "@/components/home/hero";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    alert(
      "Just to demonstrate how to programmatically navigate the user to the right page. Plese press the OK button and you will now be navigate you to the books page"
    );
    router.push("/books");
  };
  return (
    <div className="w-full">
      <Header title="Home"></Header>
      <Hero
        imgUrl="/assets/profile.png"
        title="Tomasz"
        subtitle="I am a bootcamp student"
      ></Hero>
      <Content>
        <button
          className="bg-blue-500 px-3 py-1 rounded-lg mt-8"
          onClick={handleClick}
        >
          Go to Books Page!
        </button>
      </Content>
      <Footer href="/books" title="Books"></Footer>
    </div>
  );
}
