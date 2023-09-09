import { useState } from "react";
import { orderFormInputs } from "../../data/data";
import Form from "../../ui/Form";

const initialFormValues = {
  userName: "",
  userEmail: "",
  userCity: "",
  userAddress: "",
  userNumber: "",
};

function CheckOutForm({ setHasAccount }) {
  const [values, setValues] = useState(initialFormValues);
  const { userName, userEmail, userCity, userAddress, userNumber } = values;

  function handleSubmit(e) {
    if (!userName || !userEmail || !userCity || !userAddress || !userNumber) {
      e.preventDefault();
    } else {
      setValues(initialFormValues);
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
