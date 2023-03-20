import { useLikes } from "@/context/likes";

export default function NumberOfLikes() {
  const { like } = useLikes();
  console.log("like", like);
  return <span>({like} likes)</span>;
}
