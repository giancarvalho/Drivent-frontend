import PaymentScreen from "./PaymentScreen";
import PreviousSectionNotCompleted from "./PreviousSectionNotCompleted";
import ReviewPayment from "./ReviewPayment";
import SelectIngress from "./SelectIngress";
import { Title, } from "../../../components/_shared/Texts";
import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";

export default function Payment() {
  const { enrollment } = useApi();

  const [ hasEnrollment, setHasEnrollment ] = useState(true);
  const [ hasIngress, setHasIngress ] = useState(undefined);
  const [ paymentConfirmed, setPaymentConfirmed ] = useState(undefined);
  const [ ingressInfo, setIngressInfo ] = useState({ isOnline: undefined, hasHotel: undefined, price: 0 });
  
  useEffect(() => {
    enrollment.getPersonalInformations().then(answer => {
      const { isOnlinePlan, hasHotel, payentConfirmed, } = answer.data;
      
      if (!answer.data) setHasEnrollment(false);

      if (hasHotel !== null && isOnlinePlan !== null) setHasIngress(true);
      if (payentConfirmed === null || payentConfirmed === false) setPaymentConfirmed(false);
      if (payentConfirmed) setPaymentConfirmed(true);
    }).catch();
  }, []);

  const payment = paymentConfirmed ? <ReviewPayment /> : <PaymentScreen />;
  const ingress = hasIngress ? payment : <SelectIngress />;

  return <div>
    <Title>Ingresso e pagamento</Title>
    {/* 
    { hasEnrollment 
      ?  ingress
      : <PreviousSectionNotCompleted /> 
    } */}

    <PaymentScreen />
    
  </div>;
};
