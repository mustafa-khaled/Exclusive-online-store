import Container from "../ui/Container";
import AuthImage from "../ui/AuthImage";
import SignUpForm from "../features/authentication/SignUpForm";
import { useState } from "react";
import LoginForm from "../features/authentication/LoginForm";

function SignUp() {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <Container styles="min-h-[90vh]  flex items-center gap-[20px]  justify-between">
      <AuthImage />
      {hasAccount ? (
        <LoginForm />
      ) : (
        <SignUpForm setHasAccount={setHasAccount} />
      )}
    </Container>
  );
}

export default SignUp;
