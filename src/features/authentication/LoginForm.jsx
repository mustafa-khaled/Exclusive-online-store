import { useState } from "react";
import { loginFormInputs } from "../../data/data";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const initialFormValues = {
  userEmail: "",
  password: "",
};

// https://ecommerce.routemisr.com/api/v1/auth/signup

function LoginForm() {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState("");

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  console.log(errors);

  return (
    <div className="w-full  p-[20px] md:w-[50%]">
      <div className="mb-[20px]">
        <h2 className="text-2xl font-semibold">Login To Exclusive</h2>
        <p className="text-sm">Inter Details Below.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-start gap-[20px]  text-primary"
      >
        {loginFormInputs.map((input) => (
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

        <div className=" flex w-full items-center justify-between">
          <Button type="submit">Log In</Button>
          <p>Forget Password?</p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
