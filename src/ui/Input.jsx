function Input({ type, styles, placeholder, value, onChange, name }) {
  return (
    <input
      className={`border-0  bg-lightGray  p-[5px] outline-0 ${styles}`}
      type={type}
      name={name}
      required
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
