import Card from "@comeon/react-credit-card";
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
  const [values, setValues] = React.useState({
    name: "",
    number: "",
    expiration: "",
    cvc: "",
  });
  const { enrollment } = useApi();

  const handleChange = React.useCallback(
    (event) => {
      let { name, value } = event.target;
      if (name === "number") value = value.replaceAll(" ", "");
      setValues((v) => ({ ...v, [name]: value }));
    },
    [setValues]
  );

  const [focused, setFocus] = React.useState(undefined);
  const handleFocus = React.useCallback(
    (event) => setFocus(event.target.name),
    [setFocus]
  );
  const handleBlur = React.useCallback(() => setFocus(undefined), [setFocus]);

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
        toast("Seu ingresso foi confirmado!", { containerId: "success" });
        setisPurchaseConfirmed(true);
      })
      .catch(() => {
        setIsFormDisabled(false);
        toast.error("Não foi possível concluir a sua compra", {
          containerId: "error",
        });
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
                placeholder="MM/AA"
                mask="99/99"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={values.expiration}
              />
              <InputMask
                name="cvc"
                placeholder="CVV"
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
  );
}

const Form = styled.form`
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
  }
`;

const FormContainer = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
`;

const SubmitPaymentButton = styled(Button)`
  position: absolute;
  bottom: -60px;
`;
