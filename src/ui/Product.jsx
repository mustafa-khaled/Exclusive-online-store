import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
import StarRating from "./StarRating";
import Button from "./Button";

function Product({ product }) {
  const { id, imageCover, title, price, ratingsQuantity, ratingsAverage } =
    product;

  return (
    <div
      key={id}
      className="product-container relative text-primary"
      style={{ position: "relative" }}
    >
      <img src={imageCover} alt={title} className="w-[100%]" />
      <h3 className="py-[5px] text-base font-medium">
        {title.slice(0, 25)}
        {title.length > 25 ? "..." : ""}
      </h3>
      <div className="absolute right-[20px] top-[20px] flex flex-col items-center gap-[5px]">
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white hover:bg-lightGray">
          <Link>
            <i className="fa-regular fa-heart text-xl hover:text-secondary"></i>
          </Link>
        </div>
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white hover:bg-lightGray">
          <Link to={`/product/${id}`}>
            <i className="fa-regular fa-eye text-xl hover:text-secondary"></i>
          </Link>
        </div>
      </div>
      <div className="flex  items-center gap-[10px] text-sm font-bold text-darkGray">
        <p>{formatCurrency(price)}</p>
        <StarRating ratingsAverage={ratingsAverage} />
        <p>({ratingsQuantity})</p>
      </div>

      <Button styles="absolute bottom-[30%] left-[50%] hidden -translate-x-[50%] -translate-y-[30%]   ">
        Add To Cart
      </Button>
    </div>
  );
}

export default Product;
