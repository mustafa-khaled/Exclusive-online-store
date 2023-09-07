import { useQuery } from "react-query";
import { getProduct } from "../../services/apiProducts";

export function useProduct(productId) {
  const { data: product, isLoading } = useQuery({
    queryFn: () => getProduct(productId),
    queryKey: ["product", productId],
  });
  return { product, isLoading };
}
