import { useMutation } from "react-query";
import { signIn as signInApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

export function useSignIn() {
  const navigate = useNavigate();

  const { mutate: signIn, isLoading } = useMutation({
    mutationFn: signInApi,

    onSuccess: (user) => {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", user.data.token);
      toast.success(`You Logged In Successfully.`);
      navigate("/");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { signIn, isLoading };
}
