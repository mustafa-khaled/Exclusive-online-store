import { useMutation, useQueryClient } from "react-query";
import { addToCart as addToCartApi } from "../../services/apiCart";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

export function useAddToCart(data) {
  const queryClient = useQueryClient();

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };

  const navigate = useNavigate();

  const { mutate: addToCart, isLoading } = useMutation({
    mutationFn: (data) => addToCartApi(data, config),
    mutationKey: ["addToCart", data?.productId, token],
    onSuccess: () => {
      if (config.headers.token) {
        toast.success("Product added to cart successfully");
      } else {
        toast.error("Please log in to add items to your cart.");
        navigate("/signUp");
      }
    },
    onError: (err) => {
      toast.error(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries("cart");
    },
  });

  return { addToCart, isLoading };
}
