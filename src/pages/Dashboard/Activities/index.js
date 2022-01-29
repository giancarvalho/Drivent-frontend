import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import {
  Title,
  PreviousSectionNotCompleted,
} from "../../../components/_shared/Texts";
import { toast } from "react-toastify";
import ActivitiesGrid from "../../../components/ActivitiesGrid/index";
import ActivityContext from "../../../contexts/ActivitiesContext";

export default function Activities() {
  const { enrollment } = useApi();
  const [ingressInfo, setIngressInfo] = useState({
    isOnlinePlan: undefined,
    payentConfirmed: undefined,
  });

  useEffect(() => {
    enrollment
      .getPersonalInformations()
      .then((answer) => {
        const { isOnlinePlan, payentConfirmed } = answer.data;

        if (answer.data)
          setIngressInfo({
            ...ingressInfo,
            isOnlinePlan: isOnlinePlan ? true : false,
            payentConfirmed: payentConfirmed ? true : false,
          });
      })
      .catch((answer) => toast(answer.response));
  }, []);

  let cantShowActivity = <></>;

  if (ingressInfo.payentConfirmed === false) {
    cantShowActivity = (
      <PreviousSectionNotCompleted>
        <p>Você precisa ter confirmado pagamento antes</p>
        <p>de fazer a escolha de atividades</p>
      </PreviousSectionNotCompleted>
    );
  } else if (ingressInfo.isOnlinePlan === true) {
    cantShowActivity = (
      <PreviousSectionNotCompleted>
        <p>Sua modalidade de ingresso não necessita escolher</p>
        <p>atividade. Você terá acesso a todas as atividades</p>
      </PreviousSectionNotCompleted>
    );
  }

  return (
    <ActivityContext.Provider value={{ working: true }}>
      <Title>Escolha de atividades</Title>
      {/* {cantShowActivity} */}
      <ActivitiesGrid />
    </ActivityContext.Provider>
  );
}
