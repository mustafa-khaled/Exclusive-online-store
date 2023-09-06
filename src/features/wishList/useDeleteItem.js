import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-hot-toast";
import { deleteWishListItem } from "../../services/apiWishList";

export function useDeleteItem() {
  const queryClient = useQueryClient();

  const { mutate: deleteItem, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteWishListItem(id),
    mutationKey: ["deleteFromWishList"],
    onSuccess: () => {
      toast.success("Product Removed Successfully");
    },
    onError: (err) => {
      console.log(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries("wishList");
    },
  });

  return { deleteItem, isDeleting };
}
