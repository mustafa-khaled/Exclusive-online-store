import { useState } from "react";
import { loginFormInputs } from "../../data/data";
import Form from "../../ui/Form";
import { useSignIn } from "./useSignIn";

const initialFormValues = {
  userEmail: "",
  password: "",
};

function LoginForm({ setHasAccount }) {
  const [values, setValues] = useState(initialFormValues);
  const { signIn, isLoading } = useSignIn();

  if (isLoading) return <div>Loading</div>;

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
