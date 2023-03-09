import { useRouter } from "next/router";
export default function Content() {
  const router = useRouter();

  const handleClick = () => {
    alert("You clicked the button! I will now navigate you to the right page");
    router.push("/books");
  };
  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto py-4 px-4">
        <div className="bg-green-50 mt-8">Hello welcome to my website!</div>
        <button
          className="bg-blue-500 px-3 py-1 rounded mt-8"
          onClick={handleClick}
        >
          Click Me!
        </button>
      </div>
    </div>
  );
}
