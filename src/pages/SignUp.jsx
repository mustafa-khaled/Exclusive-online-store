import { useState, useEffect } from "react";
import Container from "../ui/Container";
import AuthImage from "../ui/AuthImage";
import SignUpForm from "../features/authentication/SignUpForm";
import LoginForm from "../features/authentication/LoginForm";
import UserData from "../features/authentication/UserData";

function SignUp() {
  const [hasAccount, setHasAccount] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      setLoggedInUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setLoggedInUser(null);
  };

  return (
    <Container styles="min-h-[90vh]  flex items-center gap-[20px]  justify-between">
      <AuthImage />
      {loggedInUser ? (
        <UserData loggedInUser={loggedInUser} handleLogout={handleLogout} />
      ) : hasAccount ? (
        <LoginForm setHasAccount={setHasAccount} />
      ) : (
        <SignUpForm setHasAccount={setHasAccount} />
      )}
    </Container>
  );
}

export default SignUp;
