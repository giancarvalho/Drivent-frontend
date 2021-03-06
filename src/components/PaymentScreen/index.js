import { useState, useEffect } from "react";
import { SessionTitle } from "../_shared/Texts";
import styled from "styled-components";
import CreditCardForm from "./CreditCardForm";
import CheckImage from "../../assets/images/check.png";

export default function PaymentScreen({ ingressInfo }) {
  const [plan, setPlan] = useState({ price: 100, description: "Online" });

  const [isPurchaseConfirmed, setisPurchaseConfirmed] = useState(
    ingressInfo.payentConfirmed
  );

  useEffect(() => {
    if (!ingressInfo.isOnlinePlan)
      setPlan({ price: 250, description: "Presencial sem hotel" });

    if (ingressInfo.hasHotel)
      setPlan({ price: 600, description: "Presencial + Hotel" });
  }, [ingressInfo]);

  return (
    <PaymentContainer>
      <ChosenTicketSession>
        <SessionTitle>Ingresso escolhido</SessionTitle>
        <ReviewCardContainer>
          <p>{plan.description}</p>
          <span>R$ {plan.price}</span>
        </ReviewCardContainer>
      </ChosenTicketSession>
      <PaymentInfoSession>
        <SessionTitle>Pagamento</SessionTitle>
        {isPurchaseConfirmed ? (
          <PaymentConfirmedContainer>
            <img src={CheckImage} alt="checkImage" />
            <div>
              <span>Pagamento confirmado!</span>
              <span>Prossiga para escolha de hospedagem e atividades</span>
            </div>
          </PaymentConfirmedContainer>
        ) : (
          <CreditCardForm
            setisPurchaseConfirmed={setisPurchaseConfirmed}
            ingressInfo={ingressInfo}
          />
        )}
      </PaymentInfoSession>
    </PaymentContainer>
  );
}

const ChosenTicketSession = styled.div`
  height: 180px;
`;

const PaymentContainer = styled.div`
  font-family: "Roboto", sans-serif;
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
  background-color: #ffeed2;

  span {
    color: #898989;
    margin-top: 10px;
  }
`;

const PaymentInfoSession = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const PaymentConfirmedContainer = styled.div`
  display: flex;
  animation: fadeIn 300ms ease-in;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    line-height: 22px;
  }

  span:first-child {
    font-weight: bold;
  }
`;
