import PaymentScreen from "./PaymentScreen";
import { Title,  } from "../../../components/_shared/Texts";
import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";

export default function Payment() {
  const { enrollment } = useApi();

  const [ hasEnrollment, setHasEnrollment ] = useState(true);
  const [ paymentConfirmed, setPaymentConfirmed ] = useState(undefined);
  
  useEffect(() => {
    // check if this id has payment or ingress
    enrollment.getPersonalInformations().then(answer => {
      console.log(answer.data); // delete this line later
      const { isOnlinePlan, hasHotel, payentConfirmed, userId } = answer.data;
      
      if (!userId) setHasEnrollment(false);

      if (paymentConfirmed === null) setPaymentConfirmed(null);
      else if (paymentConfirmed === false) setPaymentConfirmed(false);
      else if (paymentConfirmed === true) setPaymentConfirmed(true);
    }).catch();
  }, []);

  const renderEnrollment = hasEnrollment ? <></>/*checkar estagio da inscrição*/ : /*<PreviousSectionNotCompleted />*/ "";
  const payment = paymentConfirmed ? /*<ReviewPayment />*/<></> : <PaymentScreen />;

  return <div>
    <Title>Ingresso e pagamento</Title>
    
    {paymentConfirmed === null ? renderEnrollment : payment }

  </div>;
};
