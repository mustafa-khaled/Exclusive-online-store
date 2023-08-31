import { useState } from "react";
import Container from "../ui/Container";
import AuthImage from "../ui/AuthImage";
import SignUpForm from "../features/authentication/SignUpForm";
import LoginForm from "../features/authentication/LoginForm";

function SignUp() {
  // If Has No Account Well Show Sing Up Form First
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <Container styles="min-h-[90vh]  flex items-center gap-[20px]  justify-between">
      <AuthImage />
      {hasAccount ? (
        <LoginForm setHasAccount={setHasAccount} />
      ) : (
        <SignUpForm setHasAccount={setHasAccount} />
      )}
    </Container>
  );
}

export default SignUp;
