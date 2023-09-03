import { useQuery } from "react-query";
import { getByCategory } from "../../services/apiProducts";

export function useProductsCategory(categoryId) {
  const { data: categoryProducts, isLoading } = useQuery({
    queryFn: () => getByCategory(categoryId),
    queryKey: ["productsByCategory", categoryId],
  });

  return { categoryProducts, isLoading };
}
