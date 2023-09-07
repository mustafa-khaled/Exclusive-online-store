import { useState } from "react";
import { useProducts } from "../features/products/useProducts";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function SearchInput() {
  const { allProducts = {}, isLoading } = useProducts();
  const [inputValue, setInputValue] = useState("");

  if (isLoading) {
    return <Loader isSmall={true} />;
  }

  const results = allProducts?.filter((product) => {
    return (
      inputValue.length >= 3 &&
      product &&
      product?.title?.toLowerCase().includes(inputValue)
    );
  });

  return (
    <div className=" relative hidden items-center  justify-between gap-[10px] bg-lightGray px-2 py-1 sm:flex ">
      <input
        type="text"
        placeholder="Search Here.. "
        className=" w-[70%]  border-0 bg-transparent outline-none placeholder:text-xs "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <i className="fa-solid fa-magnifying-glass "></i>

      <div className="absolute bottom-[-110px] left-0 z-[40]  max-h-[100px] w-full   overflow-y-auto bg-white">
        {isLoading && "Loading..."}
        {results.length > 0 &&
          results.map((item) => (
            <Link
              to={`/product/${item.id}`}
              onClick={() => setInputValue("")}
              key={item.id}
              className=" flex items-center  justify-between border-b border-gray p-[3px]"
            >
              <img src={item.imageCover} alt="" className="w-[20px]" />
              <p>{item?.title?.slice(0, 10)}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default SearchInput;
