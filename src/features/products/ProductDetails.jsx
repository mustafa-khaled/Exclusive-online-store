import { useState } from "react";
import { useParams } from "react-router";
import { useProduct } from "./useProduct";
import Container from "../../ui/Container";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import StarRating from "../../ui/StarRating";
import Button from "../../ui/Button";

function ProductDetails() {
  const param = useParams();
  const { product = {}, isLoading } = useProduct(param.id);

  const [selectedCoverImage, setSelectedCoverImage] = useState(
    product?.imageCover || "",
  );

  if (isLoading) {
    return <Loader styles="h-[80vh] flex items-center justify-center" />;
  }

  if (!product) {
    return <Empty resource={"This Product Is Not Available"} />;
  }

  const { imageCover, images, description, title, ratingsAverage } = product;
  const imagesWithCover = [imageCover, ...images];

  return (
    <Container styles="flex text-primary items-center justify-between  min-h-[90vh] flex-col md:flex-row gap-[20px]">
      <div className="flex w-full flex-col items-center gap-[10px] md:w-[50%]">
        <img
          src={selectedCoverImage || imageCover}
          alt="productCoverImage"
          className="w-full md:w-[400px]"
        />
        <div className="flex flex-wrap justify-around gap-[10px]">
          {imagesWithCover?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="smallImage"
              className="w-[60px]"
              onClick={() => setSelectedCoverImage(image)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-[10px] md:w-[50%]">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p>{description}</p>
        <StarRating ratingsAverage={ratingsAverage} />
        <div>
          <Button>Add To Cart</Button>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;
