import { useMutation, useQueryClient } from "react-query";
import { clearUserCart } from "../../services/apiCart";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useClearCart() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: clearCart, isLoading: isDeleting } = useMutation({
    mutationFn: clearUserCart,
    mutationKey: ["clearUserCart"],
    onSuccess: () => {
      toast.success("Order Successfully Created");
      navigate("/");
    },

    onSettled: () => {
      queryClient.invalidateQueries("cart");
    },
  });

  return { clearCart, isDeleting };
}
