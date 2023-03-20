import { useLikes } from "@/context/likes";
import NumberOfLikes from "./number-of-likes";

export default function LikeButton() {
  const { handleLike } = useLikes();
  return (
    <button
      type="button"
      onClick={handleLike}
      className="bg-blue-500 rounded-lg px-3 py-1 text-white"
    >
      {/* <span className="text-white">Like ({like} likes)</span> */}
      Like <NumberOfLikes></NumberOfLikes>
    </button>
  );
}
