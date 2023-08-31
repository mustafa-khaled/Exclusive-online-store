import { useState } from "react";
import { signUpFormInputs } from "../../data/data";
import { useSignUp } from "./useSignUp";
import Form from "../../ui/Form";

const initialFormValues = {
  userName: "",
  userEmail: "",
  userPhone: "",
  password: "",
  rePassword: "",
};

function SignUpForm({ setHasAccount }) {
  const [values, setValues] = useState(initialFormValues);
  const { userName, userEmail, userPhone, password, rePassword } = values;

  const { signup, isLoading, isError } = useSignUp();

  if (isLoading) return <div>Loading</div>;

  function handleSubmit(e) {
    e.preventDefault();
    if (!userName || !userEmail || !userPhone || !password || !rePassword) {
      return;
    }
    signup(values);
    console.log(signup(values));
  }

  return (
    <Form
      inputs={signUpFormInputs}
      values={values}
      setValues={setValues}
      handleSubmit={handleSubmit}
      buttonValue="Sign Up"
      formHead="Create An Account"
      formFooter="Already have an"
      setHasAccount={setHasAccount}
      isError={isError}
    />
  );
}

export default SignUpForm;
