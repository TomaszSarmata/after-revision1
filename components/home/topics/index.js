import topicList from "./topicList";

export default function Topics() {
  return (
    <div className="w-full flex flex-col mt-5 mb-10">
      <h3 className="font-medium text-2xl">Topics convered in this course</h3>
      <div>
        <ol className="list-disc">
          {topicList.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
