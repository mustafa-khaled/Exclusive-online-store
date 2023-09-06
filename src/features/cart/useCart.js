import { useQuery } from "react-query";
import { getCart } from "../../services/apiCart";

export function useCart() {
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
  });
  return { cart, isLoading };
}
