import Card from "@comeon/react-credit-card";
<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";
import validateCardForm from "./ValidateCardForm";
import "@comeon/react-credit-card/dist/react-credit-card.css";
import InputMask from "react-input-mask";
import Button from "../Form/Button";
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";

export default function CreditCardForm({
  setisPurchaseConfirmed,
  ingressInfo,
}) {
  const [isFormDisabled, setIsFormDisabled] = useState(false);
=======
import React from "react";
import styled from "styled-components";
import Input from "../Form/Input";

export default function CreditCardForm() {
>>>>>>> 9149432fb3881bf4b3c63f9e902fcbf695872fa8
  const [values, setValues] = React.useState({
    name: "",
    number: "",
    expiration: "",
<<<<<<< HEAD
    cvc: "",
  });
  const { enrollment } = useApi();

  const handleChange = React.useCallback(
    (event) => {
      let { name, value } = event.target;
      if (name === "number") value = value.replaceAll(" ", "");
      setValues((v) => ({ ...v, [name]: value }));
=======
    cvc: ""
  });
  const handleChange = React.useCallback(
    event => {
      const { name, value } = event.target;
      setValues(v => ({ ...v, [name]: value }));
>>>>>>> 9149432fb3881bf4b3c63f9e902fcbf695872fa8
    },
    [setValues]
  );

  const [focused, setFocus] = React.useState(undefined);
  const handleFocus = React.useCallback(
<<<<<<< HEAD
    (event) => setFocus(event.target.name),
=======
    event => setFocus(event.target.name),
>>>>>>> 9149432fb3881bf4b3c63f9e902fcbf695872fa8
    [setFocus]
  );
  const handleBlur = React.useCallback(() => setFocus(undefined), [setFocus]);

<<<<<<< HEAD
  function submitPurchase(e) {
    e.preventDefault();
    setIsFormDisabled(true);
    const isCardDataValid = validateCardForm(values);

    if (!isCardDataValid) {
      setIsFormDisabled(false);
      return;
    }

    enrollment
      .savePlan({
        ...ingressInfo,
        payentConfirmed: true,
      })
      .then(() => {
        toast("Seu ingresso foi confirmado!");
        setisPurchaseConfirmed(true);
      })
      .catch(() => {
        setIsFormDisabled(false);
        toast.error("Não foi possível concluir a sua compra");
      });
  }

  return (
    <>
      <FormContainer>
        <Card
          {...values}
          focused={focused}
          hasRadialGradient={true}
          hasShadow={true}
        />
        <Form onSubmit={(e) => submitPurchase(e)}>
          <fieldset disabled={isFormDisabled}>
            <InputMask
              label="Numero do Cartao"
              name="number"
              mask="9999 9999 9999 9999"
              placeholder="Numero do Cartao"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={values.number}
              className="first-input"
            />
            <span>E.g.: 49.., 51.., 36.., 37..</span>

            <InputMask
              label="name"
              type="text"
              name="name"
              mask={/^[a-zA-Z\s]*$/}
              placeholder="Nome"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={values.name}
            />
            <AuxContainer>
              <InputMask
                name="expiration"
                placeholder="MM/YY"
                mask="99/99"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={values.expiration}
              />
              <InputMask
                name="cvc"
                placeholder="cvv"
                mask="999"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={values.cvc}
              />
            </AuxContainer>
            <SubmitPaymentButton type="submit">
              Fazer pagamento
            </SubmitPaymentButton>
          </fieldset>
        </Form>
      </FormContainer>
    </>
=======
  return (
    <FormContainer>
      <Card {...values} focused={focused} />
      <Form>

        <fieldset>
          <Input label="Numero do Cartao"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={values.number} />

          <label>Card Number</label>
          <input
            name="number"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={values.number}
          />
 
          <label>Expiration</label>
          <input
            name="expiration"
            placeholder="MM/YY"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={values.expiration}
          />

          <label>CVC</label>
          <input
            name="cvc"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={values.cvc}
          />

        </fieldset>
      </Form>

    </FormContainer>
>>>>>>> 9149432fb3881bf4b3c63f9e902fcbf695872fa8
  );
}

const Form = styled.form`
<<<<<<< HEAD
  flex: 1 1 auto;

  fieldset {
    display: flex;
    flex-direction: column;

    .first-input {
      margin-bottom: 0;
    }

    .first-input + span {
      margin: 5px 0 10px 0;
      color: #979696;
    }
  }

  input {
    width: 75%;
    height: 45px;
    border-radius: 4px;
    border: 1px solid #979696;
    margin-bottom: 15px;
    font-size: 16px;
    padding-left: 15px;

    ::placeholder {
      font-size: 16px;
      padding-left: 15px;
    }
  }

  button {
    position: absolute;
    left: 0;
  }
`;

const AuxContainer = styled.div`
  display: flex;
  gap: 15px;

  input:first-child {
    width: 47%;
  }

  input:last-child {
    width: 25%;
=======

  fieldset { 
    display: flex;
    flex-direction: column;
>>>>>>> 9149432fb3881bf4b3c63f9e902fcbf695872fa8
  }
`;

const FormContainer = styled.div`
<<<<<<< HEAD
  position: relative;
  display: flex;
  gap: 30px;
`;

const SubmitPaymentButton = styled(Button)`
  position: absolute;
  bottom: -60px;
=======
  display: flex;
>>>>>>> 9149432fb3881bf4b3c63f9e902fcbf695872fa8
`;
