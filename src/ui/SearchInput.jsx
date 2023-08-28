function SearchInput() {
  return (
    <div className="bg-slate-100  px-2 py-1 text-slate-500">
      <input
        type="text"
        placeholder="What Are You Looking For? "
        className=" border-0  bg-transparent  outline-none placeholder:text-xs"
      />
      <i className="fa-solid fa-magnifying-glass "></i>
    </div>
  );
}

export default SearchInput;
