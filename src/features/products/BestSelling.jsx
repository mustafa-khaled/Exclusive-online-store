import { useProducts } from "./useProducts";
import SectionHead from "../../ui/SectionHead";
import SwiperComponent from "../../ui/SwiperComponent";

function BestSelling() {
  const { products } = useProducts();

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
