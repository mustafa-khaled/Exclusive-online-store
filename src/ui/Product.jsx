import { formatCurrency } from "../utils/helpers";
import { useAddToCart } from "../features/cart/useAddToCart";
import { useAddToWishList } from "../features/wishList/useaddToWishList";
import StarRating from "./StarRating";
import Button from "./Button";
import ProductOverlay from "./ProductOverlay";
import ProductOperations from "./ProductOperations";
import { useDeleteItem } from "../features/wishList/useDeleteItem";

function Product({ product, showBtn = true, isWishList = false }) {
  // Add Item To Cart
  const { addToCart, isLoading } = useAddToCart();
  // Add Item To Wish List
  const { addToWishList, isAdding } = useAddToWishList();
  // Delete Item From Wish List
  const { deleteItem, isDeleting } = useDeleteItem();

  const { id, imageCover, title, price, ratingsQuantity, ratingsAverage } =
    product;

  const data = {
    productId: id,
  };

  return (
    <div key={id} className="product-container relative text-primary">
      {/* Background overlay on loading */}
      {isLoading || isAdding || isDeleting ? <ProductOverlay /> : ""}

      <img src={imageCover} alt={title} className="w-[100%]" />
      <h3 className="py-[5px] text-base font-medium">
        {title?.slice(0, 25)}
        {title?.length > 25 ? "..." : ""}
      </h3>
      {/* Custom Component for add & remove from wish list and product details page */}
      <ProductOperations
        isWishList={isWishList}
        data={data}
        id={id}
        addToWishList={addToWishList}
        isAdding={isAdding}
        deleteItem={deleteItem}
        isDeleting={isDeleting}
      />
      <div className="flex  items-center gap-[10px] text-sm font-bold text-darkGray">
        <p className="text-secondary">{formatCurrency(price)}</p>
        <StarRating ratingsAverage={ratingsAverage} />
        {ratingsQuantity && <p>({ratingsQuantity})</p>}
      </div>
      {showBtn && !isLoading && !isAdding && !isDeleting && (
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
