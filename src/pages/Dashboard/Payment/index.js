import PaymentScreen from "./PaymentScreen";
import ReviewPayment from "./ReviewPayment";
import SelectIngress from "./SelectIngress";

import IncompleteEnrollment from "./IncompleteEnrollment";
import { Title, } from "../../../components/_shared/Texts";
import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";

export default function Payment() {
  const { enrollment } = useApi();

  const [ hasEnrollment, setHasEnrollment ] = useState(undefined);
  const [ hasIngress, setHasIngress ] = useState(undefined);
  const [ paymentConfirmed, setPaymentConfirmed ] = useState(undefined);
  const [ ingressInfo, setIngressInfo ] = useState({ isOnline: null, hasHotel: null, price: 0 });
  
  useEffect(() => {
    enrollment.getPersonalInformations().then(answer => {
      console.log(answer.data);

      const { isOnlinePlan, hasHotel, payentConfirmed, } = answer.data;
      
      setHasEnrollment(answer.data ? true : false );

      if (hasHotel !== null && isOnlinePlan !== null) setHasIngress(true);
      if (payentConfirmed === null || payentConfirmed === false) setPaymentConfirmed(false);
      if (payentConfirmed) setPaymentConfirmed(true);
    }).catch(answer => console.log(answer.response.data));
  }, []);

  const payment = paymentConfirmed ? <ReviewPayment ingressInfo={ingressInfo} /> : <PaymentScreen ingressInfo={ingressInfo} />;
  const ingress = hasIngress ? payment : <SelectIngress  ingressInfo={ingressInfo} setIngressInfo={setIngressInfo} setHasIngress={setHasIngress} />;

  return <>
    <Title>Ingresso e pagamento</Title>

    { hasEnrollment === undefined ? <></> : hasEnrollment 
      ?  ingress
      : <IncompleteEnrollment /> 
    }
    
  </>;
};
