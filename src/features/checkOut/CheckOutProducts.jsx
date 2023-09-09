import CheckOutItem from "../../ui/CheckOutItem";
import TotalPriceBox from "../../ui/TotalPriceBox";

function CheckOutProducts({ cart }) {
  const hasProducts = cart?.products.length > 0;

  return (
    <div className=" w-full bg-lightGray p-[20px] md:w-[50%]">
      {hasProducts &&
        cart?.products?.map((item) => (
          <CheckOutItem key={item.product.id} item={item} />
        ))}

      <TotalPriceBox cart={cart} styles={"w-full"} showBtn={false} />
    </div>
  );
}

export default CheckOutProducts;
