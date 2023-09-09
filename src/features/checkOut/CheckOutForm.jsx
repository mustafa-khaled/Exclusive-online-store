import { useState } from "react";
import { orderFormInputs } from "../../data/data";
import { useClearCart } from "../cart/useClearCart";
import Form from "../../ui/Form";

const initialFormValues = {
  userName: "",
  userEmail: "",
  userCity: "",
  userAddress: "",
  userNumber: "",
};

function CheckOutForm() {
  const [values, setValues] = useState(initialFormValues);
  const { clearCart } = useClearCart();
  const { userName, userEmail, userCity, userAddress, userNumber } = values;

  function handleSubmit(e) {
    e.preventDefault();
    if (userName && userEmail && userCity && userAddress && userNumber) {
      setValues(initialFormValues);
      clearCart();
    }
  }

  return (
    <Form
      initialFormValues={initialFormValues}
      inputs={orderFormInputs}
      values={values}
      setValues={setValues}
      handleSubmit={handleSubmit}
      buttonValue="Order Now"
      formHead="Belling Details"
    />
  );
}

export default CheckOutForm;
