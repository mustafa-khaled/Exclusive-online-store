import { formatCurrency } from "../utils/helpers";

function CheckOutItem({ item }) {
  return (
    <div className="mb-[10px] flex items-center justify-between">
      <img
        src={item.product.imageCover}
        alt={item.product.title}
        className="w-[50px]"
      />
      <h3 className=" text-sm font-medium">
        {formatCurrency(item.price * item.count)}
      </h3>
    </div>
  );
}

export default CheckOutItem;
