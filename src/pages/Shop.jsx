import ProductsList from "../features/products/ProductsList";
import Container from "../ui/Container";
import Pagination from "../ui/Pagination";

function Shop() {
  return (
    <Container styles="mt-[20px]">
      <Pagination />
      <ProductsList />
    </Container>
  );
}

export default Shop;
