import LikeButton from "./like-button";

export default function LocationItem({ location }) {
  // const handleLike = () => {
  //   let newValue = like + 1;
  //   setLike(newValue);
  // };

  return (
    <div className="w-full border rounded-lg p-4 flex flex-col justify-center items-center gap-y-1">
      <img src={location.img_url} className="rounded-lg" />
      <p className="text-center text-xl font-medium ">{location.title}</p>
      <p className="text-center text-gray-700">{location.visitedDate}</p>
      <LikeButton></LikeButton>
    </div>
  );
}
