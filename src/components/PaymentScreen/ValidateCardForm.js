import valid from "card-validator";
import { toast } from "react-toastify";

export default function validateCardForm(values) {
  let isDataValid = true;
  const validation = {
    holder: {
      isValid: valid.cardholderName(values.name).isValid,
      message: "Verifique o nome do titular",
    },
    number: {
      isValid: valid.number(values.number).isValid,
      message: "Verifique o número do cartão",
    },
    expiration: {
      isValid: valid.expirationDate(values.expiration).isValid,
      message: "Verifique a data de validade",
    },
    cvc: {
      isValid: valid.cvv(values.cvc).isValid,
      message: "Verifique o código do cartão",
    },
  };

  console.log(valid.number(values.number).isValid);

  for (const value of Object.values(validation)) {
    if (!value.isValid) {
      toast.error(value.message);
      isDataValid = false;
    }
  }

  return isDataValid;
}
