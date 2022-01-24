import PaymentScreen from "../../../components/PaymentScreen/index";
import SelectIngress from "../../../components/Ingress/SelectIngress";
import IncompleteEnrollment from "../../../components/Router/IncompleteEnrollment";
import { Title } from "../../../components/_shared/Texts";
import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import { toast } from "react-toastify";

export default function Payment() {
  const { enrollment } = useApi();

  const [hasEnrollment, setHasEnrollment] = useState(undefined);
  const [hasIngress, setHasIngress] = useState(undefined);
  const [ingressInfo, setIngressInfo] = useState({
    isOnlinePlan: null,
    hasHotel: null,
    price: 0,
  });

  useEffect(() => {
    enrollment
      .getPersonalInformations()
      .then((answer) => {
        const { isOnlinePlan, hasHotel } = answer.data;

        if (answer.data) {
          setHasEnrollment(true);
          setIngressInfo(answer.data);
        }
        if (hasHotel !== null && isOnlinePlan !== null) {
          setIngressInfo(answer.data);
          setHasIngress(true);
        }
      })
      .catch((answer) => toast.error(answer.response.data));
  }, []);

  const ingress = hasIngress ? (
    <PaymentScreen ingressInfo={ingressInfo} />
  ) : (
    <SelectIngress
      ingressInfo={ingressInfo}
      setIngressInfo={setIngressInfo}
      setHasIngress={setHasIngress}
    />
  );

  return (
    <>
      <Title>Ingresso e pagamento</Title>

      {hasEnrollment === undefined ? (
        <></>
      ) : hasEnrollment ? (
        ingress
      ) : (
        <IncompleteEnrollment />
      )}
    </>
  );
}
