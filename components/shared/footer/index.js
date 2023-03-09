import Link from "next/link";

export default function Footer({ title, href }) {
  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto mt-8 bg-blue-100">
        <Link href={href}>Go back to {title} Page</Link>
      </div>
    </div>
  );
}
