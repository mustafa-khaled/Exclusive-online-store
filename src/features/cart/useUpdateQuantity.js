import { useMutation, useQueryClient } from "react-query";
import { updateProductQuantity } from "../../services/apiCart";
import { toast } from "react-hot-toast";

export function useUpdateQuantity() {
  const queryClient = useQueryClient();

  const { mutate: updateQuantity, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, count }) => {
      updateProductQuantity(id, { count: parseInt(count) });
    },

    mutationKey: ["productUpdate"],

    onError: (err) => {
      toast.error(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries("cart");
    },
  });

  const increaseQuantity = (id, currentCount) => {
    const updatedCount = currentCount + 1;
    updateQuantity({ id, count: updatedCount });
  };

  const decreaseQuantity = (id, currentCount) => {
    if (currentCount > 1) {
      const updatedCount = currentCount - 1;
      updateQuantity({ id, count: updatedCount });
    }
  };

  return { updateQuantity, isUpdating, increaseQuantity, decreaseQuantity };
}
