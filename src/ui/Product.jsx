import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
import { useAddToCart } from "../features/cart/useAddToCart";
import { useAddToWishList } from "../features/wishList/useaddToWishList";
import StarRating from "./StarRating";
import Button from "./Button";
import ProductOverlay from "./ProductOverlay";

function Product({ product, showBtn = true, isWishList = false }) {
  const { addToCart, isLoading } = useAddToCart();
  const { addToWishList, isAdding } = useAddToWishList();
  const { id, imageCover, title, price, ratingsQuantity, ratingsAverage } =
    product;

  const data = {
    productId: id,
  };

  return (
    <div key={id} className="product-container relative text-primary">
      {/* Background overlay on loading */}
      {isLoading || (isAdding && <ProductOverlay />)}

      <img src={imageCover} alt={title} className="w-[100%]" />
      <h3 className="py-[5px] text-base font-medium">
        {title?.slice(0, 25)}
        {title?.length > 25 ? "..." : ""}
      </h3>
      <div className="absolute right-[20px] top-[20px] flex flex-col items-center gap-[5px]">
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white hover:bg-lightGray">
          {!isAdding && (
            <Link>
              {isWishList ? (
                <i className="fa-solid fa-circle-xmark text-xl hover:text-secondary"></i>
              ) : (
                <i
                  className="fa-regular fa-heart text-xl hover:text-secondary"
                  onClick={() => addToWishList(data)}
                ></i>
              )}
            </Link>
          )}
        </div>
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white hover:bg-lightGray">
          <Link to={`/product/${id}`}>
            <i className="fa-regular fa-eye text-xl hover:text-secondary"></i>
          </Link>
        </div>
      </div>
      <div className="flex  items-center gap-[10px] text-sm font-bold text-darkGray">
        <p className="text-secondary">{formatCurrency(price)}</p>
        <StarRating ratingsAverage={ratingsAverage} />
        {ratingsQuantity && <p>({ratingsQuantity})</p>}
      </div>
      {showBtn && !isLoading && !isAdding && (
        <Button
          onClick={() => addToCart(data)}
          styles="absolute bottom-[30%] left-[50%] hidden -translate-x-[50%] -translate-y-[30%]   "
        >
          Add To Cart
        </Button>
      )}
    </div>
  );
}

export default Product;
