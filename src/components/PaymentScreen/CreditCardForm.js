import Card from "@comeon/react-credit-card";
import React from "react";
import styled from "styled-components";
import Input from "../Form/Input";

export default function CreditCardForm() {
  const [values, setValues] = React.useState({
    name: "",
    number: "",
    expiration: "",
    cvc: ""
  });
  const handleChange = React.useCallback(
    event => {
      const { name, value } = event.target;
      setValues(v => ({ ...v, [name]: value }));
    },
    [setValues]
  );

  const [focused, setFocus] = React.useState(undefined);
  const handleFocus = React.useCallback(
    event => setFocus(event.target.name),
    [setFocus]
  );
  const handleBlur = React.useCallback(() => setFocus(undefined), [setFocus]);

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
  );
}

const Form = styled.form`

  fieldset { 
    display: flex;
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  display: flex;
`;
