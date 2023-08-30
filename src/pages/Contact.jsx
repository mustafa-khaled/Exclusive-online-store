import Container from "../ui/Container";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

const formInputs = [
  {
    id: 1,
    type: "text",
    placeholder: "Your Name",
    styles: "sm:w-1/3 w-full",
  },
  {
    id: 2,
    type: "text",
    placeholder: "Your Email",
    styles: "sm:w-1/3 w-full",
  },
  {
    id: 3,
    type: "number",
    placeholder: "Your Phone",
    styles: "sm:w-1/3 w-full",
  },
];

function Contact() {
  return (
    <Container styles="min-h-[90vh] text-primary flex items-center sm:justify-between justify-center gap-[30px] flex-col sm:flex-row">
      <div className="w-[100%] sm:w-[30%]">
        <div className="py-[20px]">
          <div className="flex items-center gap-[10px]">
            <i className="fa-solid fa-phone rounded-full bg-secondary p-[10px] text-white"></i>{" "}
            <h3 className="text-xl font-medium">Call To US</h3>
          </div>
          <p className="my-[10px]">We Are Available 24 / 7 Days A Week</p>
          <p>Phone: +201151747091</p>
        </div>

        <div className="py-[20px]">
          <div className="flex items-center gap-[10px]">
            <i className="fa-regular fa-envelope rounded-full bg-secondary p-[10px] text-white"></i>{" "}
            <h3 className="text-xl font-medium">Write To US</h3>
          </div>
          <p className="my-[10px]">
            Fill Out The Form And We Will Contact You Within 24 Hours
          </p>
          <p>Email: mustafakhaledinfo@gmail.com</p>
        </div>
      </div>

      <form className="w-[100%] sm:w-[70%]">
        <div className="flex flex-col items-center justify-between gap-[10px] sm:flex-row">
          {formInputs.map((input) => {
            return (
              <Input
                key={input.id}
                type={input.type}
                placeholder={input.placeholder}
                styles={input.styles}
              />
            );
          })}
        </div>
        <Textarea placeholder="Your Message" styles="w-full mt-[10px]" />
        <div className="text-right">
          <Button>Send Massage</Button>
        </div>
      </form>
    </Container>
  );
}

export default Contact;
