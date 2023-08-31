import { useMutation } from "react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignUp() {
  const {
    mutate: signup,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: signUpApi,

    onSuccess: (user) => {
      toast.success(`New Account Created Successfully.`);
      console.log(user);
    },
    onError: (error) => {
      console.log(error);
      toast.error(error?.response?.data?.message);
    },
  });

  return { signup, isLoading, isError };
}
