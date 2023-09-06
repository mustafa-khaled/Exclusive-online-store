import { useMutation, useQueryClient } from "react-query";
import { updateProductQuantity } from "../../services/apiCart";
import { toast } from "react-hot-toast";

export function useUpdateQuantity() {
  const queryClient = useQueryClient();

  const { mutate: updateQuantity, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, count }) => {
      return updateProductQuantity(id, { count: parseInt(count) });
    },
    mutationKey: ["productUpdate"],
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
      toast.success("Quantity updated successfully");
    },
    onError: (err) => {
      toast.error("Failed to update quantity");
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

  return { increaseQuantity, decreaseQuantity, isUpdating };
}
