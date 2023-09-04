import { useMutation } from "react-query";
import { updateProductQuantity } from "../../services/apiCart";

export function useUpdateQuantity() {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };

  const { mutate: updateQuantity, isLoading: isUpdating } = useMutation({
    mutationFn: (data, id) => updateProductQuantity(data, id, config),
  });

  return { updateQuantity, isUpdating };
}
