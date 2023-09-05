import { useMutation, useQueryClient } from "react-query";
import { deleteCartItem } from "../../services/apiCart";
import { toast } from "react-hot-toast";

export function useDeleteItem() {
  const queryClient = useQueryClient();

  const { mutate: deleteItem, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteCartItem(id),
    mutationKey: ["deleteProduct"],
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

  return { deleteItem, isDeleting };
}
