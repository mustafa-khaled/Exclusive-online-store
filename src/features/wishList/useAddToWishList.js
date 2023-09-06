import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import { addToWishList as addToWishListApi } from "../../services/apiWishList";
import { getCart } from "../../services/apiCart";

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

  const { mutate: addToWishList, isLoading: isAddingToWishList } = useMutation({
    mutationFn: async (data) => {
      // Check if the user is logged in
      if (!token) {
        toast.error("Please log in to add items to your wish list.");
        navigate("/signUp");
        return;
      }

      // Check if the product is in the cart first
      const cart = await getCart(config);
      const productId = data.productId;

      const productInCart = cart?.some((item) => item.product.id === productId);
      if (productInCart) {
        toast.error("Product is already in the cart.");
        return;
      }

      // If not in the cart and the user is logged in, proceed to add to the wish list
      try {
        await addToWishListApi(data, config);
        toast.success("Product added to wish list successfully");
      } catch (error) {
        toast.error("Failed to add product to wish list.");
      }
    },
    mutationKey: ["addToWishList", data?.productId, token],

    onError: (err) => {
      toast.error(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries("wishList");
    },
  });

  return { addToWishList, isAddingToWishList };
}
