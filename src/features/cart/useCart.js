import { useQuery, useQueryClient } from "react-query";
import { getCart } from "../../services/apiCart";

export function useCart() {
  const queryClient = useQueryClient();
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };

  const { data: cart, isLoading } = useQuery({
    queryFn: () => getCart(config),
    queryKey: ["cart", config],
    onSettled: () => {
      queryClient.invalidateQueries("cart");
    },
  });
  return { cart, isLoading };
}
