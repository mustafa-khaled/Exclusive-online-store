function Textarea({ placeholder, styles, name, value, onChange }) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`h-[200px] resize-none border-0  bg-lightGray  p-[5px] outline-0 ${styles}`}
    />
  );
}

export default Textarea;
