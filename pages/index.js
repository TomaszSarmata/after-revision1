import Header from "@/components/shared/header";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="w-full">
      <Header title="Home"></Header>
      <Content></Content>
      <Footer href="/books" title="Books"></Footer>
    </div>
  );
}
