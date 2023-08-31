import { useState } from "react";
import { loginFormInputs } from "../../data/data";
import Form from "../../ui/Form";

const initialFormValues = {
  userEmail: "",
  password: "",
};

function LoginForm({ setHasAccount }) {
  const [values, setValues] = useState(initialFormValues);

  function handleSubmit(e) {
    e.preventDefault();
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
