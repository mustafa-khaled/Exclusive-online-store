import SectionHead from "../../ui/SectionHead";
import SwiperComponent from "../../ui/SwiperComponent";
import { useProductsCategory } from "./useProductsCategory";

function BestSelling() {
  const electronicsCategoryId = "6439d2d167d9aa4ca970649f";
  const { categoryProducts = {} } = useProductsCategory(electronicsCategoryId);

  const products =
    categoryProducts.length > 10 && categoryProducts?.slice(0, 10);

  return (
    <div>
      <SectionHead
        head="Best Selling Products Products"
        description="This Month"
      />
      <SwiperComponent isProduct={true} data={products} />;
    </div>
  );
}

export default BestSelling;
