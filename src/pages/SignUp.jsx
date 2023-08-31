import Container from "../ui/Container";
import AuthImage from "../ui/AuthImage";
import SignUpForm from "../features/authentication/SignUpForm";

function SignUp() {
  return (
    <Container styles="min-h-[90vh]  flex items-center gap-[20px]  justify-between">
      <AuthImage />
      <SignUpForm />
    </Container>
  );
}

export default SignUp;
