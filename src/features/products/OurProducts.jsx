import { useSearchParams } from "react-router-dom";
import { useProducts } from "./useProducts";
import SectionHead from "../../ui/SectionHead";
import GridContainer from "../../ui/GridContainer";
import Product from "../../ui/Product";
import Loader from "../../ui/Loader";
import Pagination from "../../ui/Pagination";

function OurProducts() {
  const { products = {}, allProducts = {}, isLoading } = useProducts();

  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  return (
    <div>
      <SectionHead
        head="Explore Our Products"
        description="Our Products"
        operations={<Pagination active={page} count={allProducts.length} />}
      />
      {isLoading ? (
        <Loader styles="flex items-center justify-center h-[40vh]" />
      ) : (
        <GridContainer
          cols="grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
          styles="mt-[20px]"
        >
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </GridContainer>
      )}
    </div>
  );
}

export default OurProducts;
