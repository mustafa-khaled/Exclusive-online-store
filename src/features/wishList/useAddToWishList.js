import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import { addToWishList as addToWishListApi } from "../../services/apiWishList";

export function useAddToWishList(data) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };

  const { mutate: addToWishList, isLoading: isAdding } = useMutation({
    mutationFn: (data) => addToWishListApi(data, config),
    mutationKey: ["addToWishList", data?.productId, token],
    onSuccess: () => {
      if (config.headers.token) {
        toast.success("Product added to wish list successfully");
      } else {
        toast.error("Please log in to add items to your wish list.");
        navigate("/signUp");
      }
    },
    onError: (err) => {
      toast.error(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries("wishList");
    },
  });

  return { addToWishList, isAdding };
}
