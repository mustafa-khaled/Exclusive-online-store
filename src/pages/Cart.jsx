import { useCart } from "../features/cart/useCart";
import { useDeleteItem } from "../features/cart/useDeleteItem";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Empty from "../ui/Empty";
import Loader from "../ui/Loader";

function Cart() {
  const { cart = {}, isLoading } = useCart();
  const { deleteItem, idDeleting } = useDeleteItem();

  if (isLoading) {
    return <Loader styles="h-[80vh] flex items-center justify-center" />;
  }

  if (!Array.isArray(cart) || cart.length === 0) {
    return <Empty resource={"There are no cart items."} />;
  }

  return (
    <Container styles="min-h-[90vh]">
      {cart.map((item) => {
        const { imageCover, title, id } = item.product;
        return (
          <div
            key={item._id}
            className="flex flex-col items-center justify-between gap-[10px] border-b border-gray py-[20px] text-center md:flex-row md:text-left"
          >
            <img src={imageCover} alt={title} className="w-[50px]" />
            <h4 className="w-full md:w-1/5">
              {title.slice(0, 25)}
              {title.length > 25 ? "..." : ""}
            </h4>
            <p>Quantity</p>
            <p>{item.price}</p>
            <Button disabled={idDeleting} onClick={() => deleteItem(id)}>
              Delete
            </Button>
          </div>
        );
      })}
    </Container>
  );
}

export default Cart;
