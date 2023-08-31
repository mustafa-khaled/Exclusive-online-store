import { useState } from "react";
import { signUpFormInputs } from "../../data/data";
import { signUp } from "../../services/apiAuth";
import Form from "../../ui/Form";

const initialFormValues = {
  userName: "",
  userEmail: "",
  userPhone: "",
  password: "",
};

function SignUpForm({ setHasAccount }) {
  const [values, setValues] = useState(initialFormValues);
  const { userName, userEmail, userPhone, password } = values;

  function handleSubmit(e) {
    e.preventDefault();
    if (!userName || !userEmail || !userPhone || !password) return;
    signUp(values);
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
    />
  );
}

export default SignUpForm;
