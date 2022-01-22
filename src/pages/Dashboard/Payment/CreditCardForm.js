import Card from "@comeon/react-credit-card";
import React from "react";
import styled from "styled-components";
import "@comeon/react-credit-card/dist/react-credit-card.css";
import InputMask from "react-input-mask";
import Button from "../../../components/Form/Button";

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
      
      setValues(v => ({ ...v, [name]: value.replaceAll(" ", "") }));
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
      <Card {...values} focused={focused} hasRadialGradient={true} hasShadow={true} />
      <Form>

        <fieldset>
          <InputMask label="Numero do Cartao"
            name="number"
            mask="9999 9999 9999 9999"
            placeholder="Numero do Cartao"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={values.number} />
         
          <InputMask
            label="name"
            name="name"
            mask={/^[a-zA-Z]+$/}
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
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={values.expiration}
            />
            <InputMask
              name="cvc"
              placeholder="CVC"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={values.cvc}
            />
          </AuxContainer>
    
        </fieldset>
        <Button type="submit" onClick={() => console.log(values)}>Fazer pagamento</Button>
      </Form>
     
    </FormContainer>
  );
}

const Form = styled.form`

  fieldset { 
    display: flex;
    flex-direction: column;
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

  flex: 1 1 auto;
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
  display: flex;
  gap: 30px;
`;
