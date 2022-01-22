import { useState } from "react";
import { SessionTitle } from "../_shared/Texts";
import styled from "styled-components";
import CreditCardForm from "./CreditCardForm";

export default function PaymentScreen() {
  //mocked enrollment. replace with props {enrollment}
  const enrollment = {
    isOnline: false,
    hasHotel: true,
    price: 300
  };

  const [cardInfo, setCardInfo] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  function buildPlanDescription() {
    let info = "Online";

    if (!enrollment.isOnline) info = "Presencial sem Hotel";

    if (enrollment.hasHotel) info = "Presencial + Hotel";

    return info;
  }

  return <PaymentContainer>

    <ChosenTicketSession>
      <SessionTitle>Ingresso escolhido</SessionTitle>
      <ReviewCardContainer>
        <p>
          {buildPlanDescription()}      
        </p>
        <span>R$ {enrollment.price}</span>
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
