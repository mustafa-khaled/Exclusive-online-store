import { Link } from "react-router-dom";
import { useCart } from "../features/cart/useCart";
import { useWishList } from "../features/wishList/useWishList";
import MenuToggle from "./MenuToggle";
import SearchInput from "./SearchInput";

function HeaderOperations() {
  // Get Cart And Wish List To Display Length
  const { cart = {} } = useCart();
  const { wishList = {} } = useWishList();

  return (
    <div className="flex items-center gap-[20px] md:order-2 md:gap-[15px] ">
      <SearchInput />

      <div>
        <Link to={"./signUp"}>
          <i className={`fa-regular fa-user text-lg`}></i>
        </Link>
      </div>

      <div className="relative">
        <Link to={"./wishList"}>
          <i className={`fa-regular fa-heart text-lg`}></i>
        </Link>

        {Array.isArray(wishList)?.length > 0 && (
          <span className="absolute right-[-10px] top-[-5px] flex h-[17px] w-[17px] items-center justify-center rounded-full bg-secondary text-xs  text-white">
            {wishList?.length}
          </span>
        )}
      </div>

      <div className="relative">
        <Link to={"./cart"}>
          <i className={`fa-solid fa-cart-shopping text-lg`}></i>
        </Link>

        {cart?.products?.length > 0 && (
          <span className="absolute right-[-10px] top-[-5px] flex h-[17px] w-[17px] items-center justify-center rounded-full bg-secondary text-xs  text-white">
            {cart?.products?.length}
          </span>
        )}
      </div>

      <MenuToggle />
    </div>
  );
}

export default HeaderOperations;
