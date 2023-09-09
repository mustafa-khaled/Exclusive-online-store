import { useCart } from "../features/cart/useCart";
import { useNavigate } from "react-router";
import Container from "../ui/Container";
import Empty from "../ui/Empty";
import Loader from "../ui/Loader";
import CartItem from "../ui/CartItem";
import TotalPriceBox from "../ui/TotalPriceBox";

function Cart() {
  const { cart = {}, isLoading } = useCart();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkOut");
  };

  if (isLoading) {
    return <Loader styles="h-[80vh] flex items-center justify-center" />;
  }

  if (!Array.isArray(cart.products) || cart.products.length === 0) {
    return <Empty resource={"There are no cart items."} />;
  }

  return (
    <Container styles="min-h-[90vh]">
      {cart?.products?.map((item) => {
        return <CartItem key={item._id} item={item} />;
      })}
      <TotalPriceBox
        cart={cart}
        onClick={handleClick}
        styles={"max-w-[300px]"}
        btnContent={"Process To Checkout"}
      />
    </Container>
  );
}

export default Cart;
