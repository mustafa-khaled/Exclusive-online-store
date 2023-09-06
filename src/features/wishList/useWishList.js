import { useQuery } from "react-query";
import { getWishList } from "../../services/apiWishList";

export function useWishList() {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };

  const { data: wishList, isLoading } = useQuery({
    queryFn: () => getWishList(config),
    queryKey: ["wishList", config],
    onError: (err) => {
      console.log(err);
    },
  });
  return { wishList, isLoading };
}
