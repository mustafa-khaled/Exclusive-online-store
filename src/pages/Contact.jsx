import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { contactFormInputs } from "../data/data";

import Container from "../ui/Container";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

const initialFormValues = {
  userName: "",
  userEmail: "",
  message: "",
  userPhone: 0,
};
function Contact() {
  // Manege Form Inputs
  const [values, setValues] = useState(initialFormValues);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Handle Send Message To Email Using EmailJs Library
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0vmk21e",
        "template_f2yk3oi",
        form.current,
        "BseuyQqkeVExJE9f8",
      )
      .then(
        () => {
          toast.success("Send Successfully");
          setValues(initialFormValues);
        },
        (error) => {
          toast.Error(error);
        },
      );
  };

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

      <form ref={form} onSubmit={sendEmail} className="w-[100%] sm:w-[70%]">
        <div className="flex flex-col items-center justify-between gap-[10px] sm:flex-row">
          {contactFormInputs.map((input) => {
            return (
              <Input
                key={input.id}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                value={values[input.name]}
                onChange={onChange}
                styles="sm:w-1/3 w-full"
              />
            );
          })}
        </div>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          styles="w-full mt-[10px]"
        />
        <div className="text-right">
          <Button type="submit">Send Massage</Button>
        </div>
      </form>
    </Container>
  );
}

export default Contact;
