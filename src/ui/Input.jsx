function Input({ type, styles, placeholder, value, onChange }) {
  return (
    <input
      className={`bg-lightGray  border-0  p-[5px] outline-0 ${styles}`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
