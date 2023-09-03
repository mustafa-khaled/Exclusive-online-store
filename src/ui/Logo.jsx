import { useNavigate } from "react-router";
import logoImage from "../assets/Logo.png";

function Logo() {
  const navigate = useNavigate();

  return (
    <img
      onClick={() => navigate("/")}
      src={logoImage}
      alt="LogoImage"
      className="w-[100px] cursor-pointer sm:w-[auto]"
    />
  );
}

export default Logo;
