function Button({ children, type = "button", onClick, styles }) {
  return (
    <button onClick={onClick} type={type} className={styles}>
      <a href="#_" className="group relative inline-block p-2 font-medium">
        <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-primary transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 h-full w-full border-2 border-primary bg-white group-hover:bg-primary"></span>
        <span className="relative text-primary group-hover:text-white">
          {children}
        </span>
      </a>
    </button>
  );
}

export default Button;
