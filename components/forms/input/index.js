export default function Input({ placeholder, value, onChange }) {
  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <div>
      <input
        className="bg-gray-200 py-3 px-6 w-96 rounded"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
