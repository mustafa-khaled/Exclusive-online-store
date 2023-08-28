import { Link } from "react-router-dom";

function HomeLinks() {
  return (
    <ul className="flex h-[400px] w-[100%]  flex-col items-start justify-around  px-[20px] pt-[20px] md:w-[20%] md:border-r md:border-gray  ">
      <li>
        <Link className="font-medium ">Women's Fashion</Link>
      </li>
      <li>
        <Link className="font-medium ">Men's Fashion</Link>
      </li>
      <li>
        <Link className="font-medium ">Electronics</Link>
      </li>
      <li>
        <Link className="font-medium "> Baby & Toys</Link>
      </li>

      <li>
        <Link className="font-medium ">Books</Link>
      </li>

      <li>
        <Link className="font-medium ">Gome</Link>
      </li>

      <li>
        <Link className="font-medium ">Beauty & Health</Link>
      </li>
    </ul>
  );
}

export default HomeLinks;
