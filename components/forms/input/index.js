export default function Input(props) {
  const handleChange = (e) => {
    const value = e.target.value;
    props.onChange(value);
  };

  return (
    <div>
      <input
        className="bg-gray-200 py-3 px-6 w-full rounded"
        {...props}
        onChange={handleChange}
      />
    </div>
  );
}
