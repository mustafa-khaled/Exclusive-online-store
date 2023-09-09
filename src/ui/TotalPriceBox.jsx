// Custom total price box to display total Price in cart and checkout page
import { formatCurrency } from "../utils/helpers";
import Button from "../ui/Button";

function TotalPriceBox({ cart, onClick, styles, btnContent, showBtn = true }) {
  return (
    <div
      className={`${styles} ml-auto mt-[20px]  border border-gray p-[20px] text-center`}
    >
      <div className="mb-[20px] flex items-center justify-between font-semibold">
        <h1>Total Price: </h1>
        <h2 className="text-secondary">
          {formatCurrency(cart.totalCartPrice)}
        </h2>
      </div>
      {showBtn && <Button onClick={onClick}>{btnContent}</Button>}
    </div>
  );
}

export default TotalPriceBox;
