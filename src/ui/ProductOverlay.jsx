import Loader from "./Loader";

function ProductOverlay() {
  return (
    <div className="absolute  inset-0 flex items-center justify-center bg-primary opacity-50">
      <Loader />
    </div>
  );
}

export default ProductOverlay;
