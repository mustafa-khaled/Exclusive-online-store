import { signUpFormInputs } from "../../data/data";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function SignUpForm() {
  return (
    <form className="flex w-full flex-col items-start gap-[20px] p-[30px] text-primary md:w-[50%]">
      <div>
        <h2 className="text-2xl font-semibold">Create An Account</h2>
        <p className="text-sm">Inter Details Below.</p>
      </div>
      {signUpFormInputs.map((input) => (
        <Input
          key={input.id}
          styles="w-full"
          type={input.type}
          placeholder={input.placeholder}
        />
      ))}
      <Button>Create Account</Button>
      <p>Already Have An Account?</p>
    </form>
  );
}

export default SignUpForm;
