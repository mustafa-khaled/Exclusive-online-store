import { useState } from "react";
import { loginFormInputs } from "../../data/data";
import { useSignIn } from "./useSignIn";
import Form from "../../ui/Form";
import Loader from "../../ui/Loader";

const initialFormValues = {
  userEmail: "",
  password: "",
};

function LoginForm({ setHasAccount }) {
  const [values, setValues] = useState(initialFormValues);
  const { signIn, isLoading } = useSignIn();

  if (isLoading)
    return (
      <Loader styles="w-full flex item-center justify-center md:w-[50%]" />
    );

  function handleSubmit(e) {
    e.preventDefault();
    signIn(values);
    setValues(initialFormValues);
  }

  return (
    <Form
      initialFormValues={initialFormValues}
      inputs={loginFormInputs}
      values={values}
      setValues={setValues}
      handleSubmit={handleSubmit}
      buttonValue="Log Up"
      formHead="Login To Exclusive"
      formFooter="Create New"
      setHasAccount={setHasAccount}
    />
  );
}

export default LoginForm;
