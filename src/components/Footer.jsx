import { footerLinks } from "../data/data";
import Container from "../ui/Container";
import GridContainer from "../ui/GridContainer";

function Footer() {
  return (
    <footer className="mt-[70px] bg-primary py-[50px] text-white ">
      <Container>
        <GridContainer cols="grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
          {footerLinks.map((list, index) => (
            <ul key={index} className="text-center sm:text-left">
              <li className="mb-[20px] text-2xl">{list.title}</li>
              {list.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-[10px] hover:text-gray">
                  {item.icon ? <i className={`${item.icon} mr-[8px]`} /> : null}
                  {item.text}
                </li>
              ))}
            </ul>
          ))}
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
