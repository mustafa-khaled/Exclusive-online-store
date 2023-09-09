import { useQuery } from "react-query";
import { getCart } from "../../services/apiCart";
import toast from "react-hot-toast";

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

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { cart, isLoading };
}
