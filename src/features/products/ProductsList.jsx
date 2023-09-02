import { useProducts } from "./useProducts";
import Loader from "../../ui/Loader";
import GridContainer from "../../ui/GridContainer";
import Product from "../../ui/Product";
import Empty from "../../ui/Empty";

function ProductsList() {
  const { products = {}, isLoading } = useProducts();

  if (isLoading) {
    return <Loader styles="h-[80vh] flex items-center justify-center" />;
  }

  if (!products.length) {
    return <Empty resource={"failed To fetch Products"} />;
  }

  return (
    <GridContainer cols="grid-cols-[repeat(auto-fill,minmax(270px,1fr))]">
      {products.length > 0 &&
        products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </GridContainer>
  );
}

export default ProductsList;
