import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";

function Product({ product }) {
  const { id, imageCover, title, price, ratingsQuantity } = product;

  return (
    <div key={id} className="relative  text-primary">
      <img src={imageCover} alt={title} className="w-[100%]" />
      <h3 className=" py-[5px]  text-base font-medium">
        {title.slice(0, 25)}
        {title.length > 25 ? "..." : ""}
      </h3>
      <div className="absolute right-[20px] top-[20px] flex flex-col items-center gap-[5px]  ">
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white hover:bg-lightGray">
          <Link>
            <i className="fa-regular fa-heart  text-xl hover:text-secondary"></i>
          </Link>
        </div>
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white hover:bg-lightGray">
          <Link>
            <i className="fa-regular fa-eye  text-xl hover:text-secondary"></i>
          </Link>
        </div>
      </div>
      <div className="text-darkGray text-sm font-bold">
        <span className="">{formatCurrency(price)}</span>
        <span className="mx-[10px]">Rating</span>
        <span>({ratingsQuantity})</span>
      </div>
    </div>
  );
}

export default Product;