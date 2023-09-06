import { useWishList } from "../features/wishList/useWishList";
import Container from "../ui/Container";
import Empty from "../ui/Empty";
import GridContainer from "../ui/GridContainer";
import Loader from "../ui/Loader";
import Product from "../ui/Product";

function WishList() {
  const { wishList = {}, isLoading } = useWishList();

  if (isLoading) {
    return <Loader styles="h-[80vh] flex items-center justify-center" />;
  }

  if (!Array.isArray(wishList) || wishList.length === 0) {
    return <Empty resource={"There are no wish list items."} />;
  }

  return (
    <Container styles="min-h-[90vh]">
      <GridContainer cols="grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {wishList.map((item) => (
          <Product key={item._id} product={item} isWishList={true} />
        ))}
      </GridContainer>
    </Container>
  );
}

export default WishList;
