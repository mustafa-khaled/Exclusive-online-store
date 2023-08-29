import Container from "../ui/Container";
import GridContainer from "../ui/GridContainer";

function Footer() {
  return (
    <footer className="mt-[70px] bg-primary py-[50px] text-white ">
      <Container>
        <GridContainer>
          <ul className="text-center sm:text-left">
            <li className="mb-[20px] text-2xl">Exclusive</li>
            <li className="mb-[10px] hover:text-gray">Subscribe</li>
            <li className="mb-[10px]  hover:text-gray">
              Get 10% Off Your First Order
            </li>
          </ul>

          <ul className="text-center sm:text-left">
            <li className="mb-[20px] text-2xl">Support</li>
            <li className="mb-[10px]  hover:text-gray">Cairo, Egypt</li>
            <li className="mb-[10px]  hover:text-gray">
              mustafakhaledinfo@gmail.com
            </li>
            <li className=" hover:text-gray">+201151747091</li>
          </ul>

          <ul className="text-center sm:text-left">
            <li className="mb-[20px] text-2xl">Account</li>
            <li className="mb-[10px]  hover:text-gray">My Account</li>
            <li className="mb-[10px]  hover:text-gray">Login / Register </li>
            <li className="mb-[10px]  hover:text-gray">Cart </li>
            <li className="mb-[10px]  hover:text-gray">Wishlist </li>
            <li className=" hover:text-gray">Shop </li>
          </ul>

          <ul className="text-center sm:text-left">
            <li className="mb-[20px] text-2xl">Quick Link</li>
            <li className="mb-[10px]  hover:text-gray">Privacy Policy</li>
            <li className="mb-[10px]  hover:text-gray">Terms Of Use </li>
            <li className="mb-[10px]  hover:text-gray">FAQ </li>
            <li className=" hover:text-gray">Contact </li>
          </ul>

          <ul className="text-center sm:text-left">
            <li className="mb-[20px] text-2xl">Links</li>
            <li className="mb-[10px]  hover:text-gray">
              <i className="fa-brands fa-github"></i>
            </li>
            <li className=" hover:text-gray">
              <i className="fa-brands fa-linkedin"></i>
            </li>
          </ul>
        </GridContainer>
      </Container>
      <p className="mt-[20px] border-t border-gray px-[20px] pt-[20px] text-center text-gray">
        Copyright &copy;
        <a
          href="https://github.com/mustafa-khaled"
          target="_blank"
          rel="noreferrer"
          className="text-secondary"
        >
          Mutafa Khaled
        </a>
        . all rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
