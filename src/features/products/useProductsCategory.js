import { useQuery } from "react-query";
import { getByCategory } from "../../services/apiProducts";

function useProductsCategory(categoryId) {
  const { data: categoryProducts, isLoading } = useQuery({
    queryFn: () => getByCategory(categoryId),
    queryKey: ["productsByCategory"],
  });

  return { categoryProducts, isLoading };
}

export default useProductsCategory;
