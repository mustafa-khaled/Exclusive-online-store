import { formatCurrency } from "../utils/helpers";
import Button from "../ui/Button";

function TotalPriceBox({ cart }) {
  return (
    <div className="ml-auto mt-[20px] max-w-[300px] border border-gray p-[20px] text-center">
      <h2 className="mb-[20px] font-semibold">
        {formatCurrency(cart.totalCartPrice)}
      </h2>
      <Button>Process To Checkout</Button>
    </div>
  );
}

export default TotalPriceBox;
