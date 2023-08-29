import Container from "../ui/Container";

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
        <div className="flex items-center justify-between gap-[10px]">
          <input
            type="text"
            placeholder="Your Name"
            className="w-1/3 bg-gray"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="w-1/3 bg-gray"
          />
          <input
            type="number"
            placeholder="Your Phone"
            className="w-1/3 bg-gray"
          />
        </div>
        <textarea placeholder="Your Message" className="bg-gray" />
      </form>
    </Container>
  );
}

export default Contact;
