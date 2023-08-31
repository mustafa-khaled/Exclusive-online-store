function Input({ type, styles, placeholder, value, onChange, name, error }) {
  return (
    <div className="w-full">
      <input
        className={`border-0  bg-lightGray  p-[5px] outline-0 ${styles} w-full`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="mt-[5px] text-sm text-red-400">{error}</p>}
    </div>
  );
}

export default Input;
