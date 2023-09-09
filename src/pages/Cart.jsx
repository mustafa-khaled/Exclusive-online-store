import { useCart } from "../features/cart/useCart";
import Container from "../ui/Container";
import Empty from "../ui/Empty";
import Loader from "../ui/Loader";
import CartItem from "../ui/CartItem";
import TotalPriceBox from "../components/TotalPriceBox";

function Cart() {
  const { cart = {}, isLoading } = useCart();

  if (isLoading) {
    return <Loader styles="h-[80vh] flex items-center justify-center" />;
  }

  if (!Array.isArray(cart.products) || cart.products.length === 0) {
    return <Empty resource={"There are no cart items."} />;
  }

  // console.log(cart.totalCartPrice);

  return (
    <Container styles="min-h-[90vh]">
      {cart?.products?.map((item) => {
        return <CartItem key={item._id} item={item} />;
      })}
      <TotalPriceBox cart={cart} />
    </Container>
  );
}

export default Cart;
