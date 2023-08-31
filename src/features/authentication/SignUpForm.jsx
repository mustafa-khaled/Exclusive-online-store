import { useState } from "react";
import { signUpFormInputs } from "../../data/data";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { signUp } from "../../services/apiAuth";

// /api/v1/auth/signup
const initialFormValues = {
  userName: "",
  userEmail: "",
  userPhone: "",
  password: "",
};

function SignUpForm({ setHasAccount }) {
  const [values, setValues] = useState(initialFormValues);
  const { userName, userEmail, userPhone, password } = values;
  const [errors, setErrors] = useState("");

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!userName || !userEmail || !userPhone || !password) return;
    signUp(values);
  }

  return (
    <div className="w-full  p-[20px] md:w-[50%]">
      <div className="mb-[20px]">
        <h2 className="text-2xl font-semibold">Create An Account</h2>
        <p className="text-sm">Inter Details Below.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-start gap-[20px]  text-primary"
      >
        {signUpFormInputs.map((input) => (
          <Input
            key={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={values[input.name]}
            onChange={onChange}
            error={errors[input.name]}
          />
        ))}
        <Button type="submit">Create Account</Button>
      </form>
      <p className="mt-[20px]">
        Already Have An Account?
        <button onClick={() => setHasAccount((u) => !u)}>Login</button>
      </p>
    </div>
  );
}

export default SignUpForm;
