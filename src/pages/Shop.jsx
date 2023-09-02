import { useProducts } from "../features/products/useGetProducts";
import { useSearchParams } from "react-router-dom";
import ProductsList from "../features/products/ProductsList";
import Container from "../ui/Container";
import Pagination from "../ui/Pagination";

function Shop() {
  const { allProducts = {} } = useProducts();
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  return (
    <Container styles="mt-[20px]">
      <Pagination active={page} count={allProducts.length} />
      <ProductsList />
    </Container>
  );
}

export default Shop;
