import { useState } from "react";
import { SessionTitle } from "../../../components/_shared/Texts";
import styled from "styled-components";
import CreditCardForm from "./CreditCardForm";

export default function PaymentScreen() {
  const [cardInfo, setCardInfo] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  return <PaymentContainer>

    <ChosenTicketSession>
      <SessionTitle>Ingresso escolhido</SessionTitle>
      <ReviewCardContainer>
        <p>Presencial + Com Hotel</p>
        <span>R$ 600</span>
      </ReviewCardContainer>
    </ChosenTicketSession>
    <PaymentInfoSession>
      <SessionTitle>Pagamento</SessionTitle>
      <CreditCardForm />
    </PaymentInfoSession>
  </PaymentContainer>;
}

const ChosenTicketSession = styled.div`
  height: 180px;
`;

const PaymentContainer = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const ReviewCardContainer = styled.div`
  width: 290px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #454545;
  font-size: 16px;
  border-radius: 20px;
  background-color:#FFEED2;

  span {
    color:#898989;
    margin-top: 10px;
  }

`;

const PaymentInfoSession = styled.div`

`;
