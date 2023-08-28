function SearchInput() {
  return (
    <div className="  bg-gray hidden  items-center justify-between gap-[10px] px-2 py-1 sm:flex ">
      <input
        type="text"
        placeholder="Search Here.. "
        className=" w-[70%]  border-0 bg-transparent outline-none placeholder:text-xs "
      />
      <i className="fa-solid fa-magnifying-glass "></i>
    </div>
  );
}

export default SearchInput;
