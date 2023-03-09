import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    alert("You clicked the button! I will now navigate you to the right page");
    router.push("/books");
  };

  return (
    <div>
      <div className="bg-green-50">Hello welcome to my website!</div>
      <button className="bg-blue-500 px-3 py-1 rounded" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
}
