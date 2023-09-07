import { Link } from "react-router-dom";
import Container from "../ui/Container";

function NotFoundPage() {
  return (
    <Container styles="h-[90vh] flex items-center justify-center text-center">
      <div>
        <i className="fa-solid fa-face-dizzy text-5xl"></i>
        <p className="my-[20px] font-semibold">
          The Page You are Looking For Doesn't Exist
        </p>
        <Link to="/" replace>
          <button className="bg-gray p-[10px]">Go Home!</button>
        </Link>
      </div>
    </Container>
  );
}

export default NotFoundPage;
