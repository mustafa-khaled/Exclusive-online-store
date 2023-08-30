function Textarea({ placeholder, styles }) {
  return (
    <textarea
      placeholder={placeholder}
      className={`bg-lightGray h-[200px] resize-none  border-0  p-[5px] outline-0 ${styles}`}
    />
  );
}

export default Textarea;
