import { useEffect, useState, useContext } from "react";
import useApi from "../../../hooks/useApi";
import {
  Title,
  PreviousSectionNotCompleted,
} from "../../../components/_shared/Texts";
import { toast } from "react-toastify";
import DateFilter from "../../../components/Activities/DateFilter";
import ActivitiesGrid from "../../../components/ActivitiesGrid";
import EventInfoContext from "../../../contexts/EventInfoContext";
import ActivitiesContext from "../../../contexts/ActivitiesContext";

export default function Activities() {
  const { enrollment } = useApi();
  const [ingressInfo, setIngressInfo] = useState({
    isOnlinePlan: undefined,
    payentConfirmed: undefined,
  });
  const [filtering, setFiltering] = useState(false);
  const { dateEvents } = useContext(EventInfoContext);
  const [subscribedActivities, setSubscribedActivities] = useState([]);
<<<<<<< HEAD
=======
  console.log(dateEvents);
>>>>>>> staging

  useEffect(() => {
    enrollment
      .getPersonalInformations()
      .then((answer) => {
        const { isOnlinePlan, payentConfirmed, activities } = answer.data;

        if (answer.data)
          setIngressInfo({
            ...ingressInfo,
            isOnlinePlan: isOnlinePlan ? true : false,
            payentConfirmed: payentConfirmed ? true : false,
          });
        setSubscribedActivities(activities);
      })
      .catch((answer) =>
        toast.error(answer.response, { containerId: "error" })
      );
  }, []);

  let cantShowActivity = false;

  if (
    ingressInfo.payentConfirmed === false ||
    ingressInfo.payentConfirmed === undefined
  ) {
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

  const activities = (
    <>
      <DateFilter filtering={filtering} setFiltering={setFiltering} />
      {filtering ? (
        <ActivitiesGrid
          activitiesData={dateEvents}
        /> /* put <activityScreen/> here and use this inside: const { dateEvents } = useContext(EventInfoContext) */
      ) : (
        <></>
      )}
    </>
  );

  return (
    <ActivitiesContext.Provider
      value={{ subscribedActivities, setSubscribedActivities }}
    >
      <Title>Escolha de atividades</Title>
      {cantShowActivity || activities}
    </ActivitiesContext.Provider>
  );
}
