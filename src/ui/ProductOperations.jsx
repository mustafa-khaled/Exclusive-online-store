import { Link } from "react-router-dom";

function ProductOperations({
  isWishList,
  data,
  id,
  addToWishList,
  isAdding,
  deleteItem,
  isDeleting,
}) {
  return (
    <div className="absolute right-[20px] top-[20px] flex flex-col items-center gap-[5px]">
      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white hover:bg-lightGray">
        {!isAdding && !isDeleting && (
          <Link>
            {isWishList ? (
              <i
                className="fa-solid fa-circle-xmark text-xl hover:text-secondary"
                onClick={() => deleteItem(id)}
              ></i>
            ) : (
              <i
                className="fa-regular fa-heart text-xl hover:text-secondary"
                onClick={() => addToWishList(data)}
              ></i>
            )}
          </Link>
        )}
      </div>
      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white hover:bg-lightGray">
        <Link to={`/product/${id}`}>
          <i className="fa-regular fa-eye text-xl hover:text-secondary"></i>
        </Link>
      </div>
    </div>
  );
}

export default ProductOperations;
