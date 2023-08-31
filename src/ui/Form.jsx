// Custom Form For Sing Up And Log In

import Input from "./Input";
import Button from "./Button";

function Form({
  inputs,
  handleSubmit,
  buttonValue,
  formHead,
  setHasAccount,
  formFooter,
  values,
  setValues,
}) {
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full  p-[20px] text-primary  md:w-[50%]">
      <div className="mb-[20px]">
        <h2 className="text-2xl font-semibold">{formHead}</h2>
        <p className="mt-[5px] text-sm">Inter Details Below.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-start gap-[20px] "
      >
        {inputs.map((input) => (
          <Input
            key={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <div className=" flex w-full items-center justify-between">
          <Button type="submit">{buttonValue}</Button>
          <p
            className="cursor-pointer text-sm"
            onClick={() => setHasAccount((c) => !c)}
          >
            {formFooter}
            <span className=" mx-[5px] underline">account</span>?
          </p>
        </div>
      </form>
    </div>
  );
}

export default Form;
