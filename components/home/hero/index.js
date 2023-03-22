export default function Hero({ imgUrl, title, subtitle }) {
  return (
    <div className="max-w-6xl mx-auto py-4 w-full">
      <div className="w-full flex flex-col md:flex-row items-center py-4 space-y-4 md:space-x-4">
        <div className="w-48">
          <img className="rounded-lg " src={imgUrl} alt="" />
        </div>
        <div className="w-full text-center md:text-start">
          <h1 className="text-6xl font-bold">{title}</h1>
          <p className="text-xl text-gray-700">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
