function Button({ children, type = "button", onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="rounded bg-secondary  px-6 py-2 font-bold text-white hover:bg-blue-700"
    >
      {children}
    </button>
  );
}

export default Button;
