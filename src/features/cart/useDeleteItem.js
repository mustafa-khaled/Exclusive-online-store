import { useMutation, useQueryClient } from "react-query";
import { deleteCartItem } from "../../services/apiCart";
import { toast } from "react-hot-toast";

export function useDeleteItem() {
  const queryClient = useQueryClient();
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };

  const { mutate: deleteItem, isLoading: idDeleting } = useMutation({
    mutationFn: (id) => deleteCartItem(config, id),
    mutationKey: ["deleteProduct", token],
    onSuccess: () => {
      toast.success("Product Deleted Successfully");
    },
    onError: (err) => {
      console.log(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries("cart");
    },
  });

  return { deleteItem, idDeleting };
}
