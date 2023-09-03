import { useParams } from "react-router";
import { useProduct } from "./useProduct";
import Container from "../../ui/Container";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import StarRating from "../../ui/StarRating";

function ProductDetails() {
  const param = useParams();
  const { product, isLoading } = useProduct(param.id);

  if (isLoading) {
    return <Loader styles="h-[80vh] flex items-center justify-center" />;
  }

  if (!product) {
    return <Empty resource={"This Product Is Not Available"} />;
  }

  console.log(product);

  return (
    <Container styles="flex text-primary items-center justify-between  min-h-[90vh] flex-col md:flex-row gap-[20px]">
      <div className="flex w-full flex-col items-center   gap-[10px]  md:w-[50%]">
        <img
          src={product.imageCover}
          alt="productCoverImage"
          className="w-full md:w-[400px]"
        />
        <div className="flex    flex-wrap justify-around gap-[10px]">
          {product?.images?.map((image) => (
            <img key={image} src={image} alt="" className="w-[60px]" />
          ))}
        </div>
      </div>

      <div className="flex w-full   flex-col items-center justify-center gap-[10px] text-center md:w-[50%]">
        <h2 className="text-2xl font-semibold">{product.title}</h2>
        <p>{product.description}</p>
        <StarRating ratingsAverage={product.ratingsAverage} />
      </div>
    </Container>
  );
}

export default ProductDetails;
