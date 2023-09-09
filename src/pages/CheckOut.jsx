import { useCart } from "../features/cart/useCart";
import CheckOutProducts from "../features/checkOut/CheckOutProducts";
import Container from "../ui/Container";
import Loader from "../ui/Loader";
import CheckOutForm from "../features/checkOut/CheckOutForm";

function CheckOut() {
  const { cart = {}, isLoading } = useCart();

  if (isLoading) {
    return <Loader styles="h-[80vh]  flex items-center justify-center" />;
  }

  return (
    <Container styles="min-h-[90vh] mt-[20px] flex items-start gap-[20px] justify-center md:justify-between flex-col-reverse md:flex-row">
      <CheckOutForm />
      <CheckOutProducts cart={cart} />
    </Container>
  );
}

export default CheckOut;
