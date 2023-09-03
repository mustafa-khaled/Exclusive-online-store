import { useQuery } from "react-query";
import { getCart } from "../../services/apiCart";

export function useCart() {
  const { data: cart, isLoading } = useQuery({
    queryFn: getCart,
    queryKey: ["cart"],
  });
  return { cart, isLoading };
}
