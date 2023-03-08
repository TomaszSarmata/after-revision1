import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-red-100 text-2xl">Hello👋</div>
      <div>
        <Link href="/books">Go to books page</Link>
      </div>
    </div>
  );
}
