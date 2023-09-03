import { useMutation } from "react-query";
import { addToCart as addToCartApi } from "../../services/apiCart";
import { toast } from "react-hot-toast";

export function useAddToCart(data) {
  const { mutate: addToCart, isLoading } = useMutation({
    mutationFn: () => addToCartApi(data),
    mutationKey: ["productId", data?.productId],
    onSuccess: () => {
      toast.success("Product added to cart Successfully");
    },
    onError: (err) => {
      console.log(data);
      toast.error(err.message);
    },
  });

  return { addToCart, isLoading };
}
