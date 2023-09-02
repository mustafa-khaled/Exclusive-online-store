import { useQuery, useQueryClient } from "react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useProducts() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const pageSize = PAGE_SIZE;

  const { data, isLoading } = useQuery({
    queryFn: () => getProducts({ page, pageSize }),
    queryKey: ["products", page],
  });

  const { paginatedProducts: products, allProducts } = data || {};

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["products", page - 1],
      queryFn: () => getProducts({ page: page - 1, pageSize }),
    });
  }

  return { products, allProducts, isLoading };
}
