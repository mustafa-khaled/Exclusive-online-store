import { useDeleteItem } from "../features/cart/useDeleteItem";
import { useUpdateQuantity } from "../features/cart/useUpdateQuantity";
import UpdateItemQuantity from "../features/cart/UpdateItemQuantity";
import Button from "./Button";
import ProductOverLay from "./ProductOverlay";

function CartItem({ item }) {
  const { deleteItem, isDeleting } = useDeleteItem();
  const { imageCover, title, id } = item.product;
  const { increaseQuantity, decreaseQuantity, isUpdating } =
    useUpdateQuantity();

  const handleQuantityDecrease = () => {
    const currentCount = parseInt(item.count, 10);
    decreaseQuantity(id, currentCount);
    console.log("Decrease");
  };

  const handleQuantityIncrease = () => {
    const currentCount = parseInt(item.count, 10);
    increaseQuantity(id, currentCount);
    console.log("Increase");
  };

  return (
    <div className=" relative flex flex-col items-center justify-between gap-[10px] border-b border-gray py-[20px] text-center md:flex-row md:text-left">
      {isDeleting && <ProductOverLay />}
      <img src={imageCover} alt={title} className="w-[50px]" />
      <h4 className="w-full md:w-1/5">
        {title.slice(0, 25)}
        {title.length > 25 ? "..." : ""}
      </h4>
      <UpdateItemQuantity
        item={item}
        isUpdating={isUpdating}
        handleQuantityDecrease={handleQuantityDecrease}
        handleQuantityIncrease={handleQuantityIncrease}
      />
      <p>{item.price}</p>
      <div>
        {!isDeleting && (
          <Button disabled={isDeleting} onClick={() => deleteItem(id)}>
            Delete
          </Button>
        )}
      </div>
    </div>
  );
}

export default CartItem;
