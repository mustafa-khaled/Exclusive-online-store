// Component to display All the categories
import Container from "../../ui/Container";
import Empty from "../../ui/Empty";
import GridContainer from "../../ui/GridContainer";
import Loader from "../../ui/Loader";
import Product from "../../ui/Product";
import useProductsCategory from "./useProductsCategory";

function Category({ categoryId }) {
  const { categoryProducts = {}, isLoading } = useProductsCategory(categoryId);

  if (isLoading) {
    return <Loader styles="h-[80vh] flex items-center justify-center" />;
  }

  if (!categoryProducts.length) {
    return <Empty resource={"failed To fetch Products"} />;
  }

  return (
    <Container styles="mt-[20px]">
      <GridContainer cols="grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {categoryProducts.length > 0 &&
          categoryProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </GridContainer>
    </Container>
  );
}

export default Category;
