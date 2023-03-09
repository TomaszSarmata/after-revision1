export default function Hero({ imgUrl, title, subtitle }) {
  return (
    <div className="max-w-6xl mx-auto py-4 w-full">
      <div className="w-full flex flex-row space-x-2 ">
        <div className="w-2/12">
          <img className="rounded-lg " src={imgUrl} alt="" />
        </div>
        <div className="w-10/12">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl text-gray-700">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
