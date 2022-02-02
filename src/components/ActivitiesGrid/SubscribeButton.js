import { useContext } from "react";
import styled from "styled-components";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import useApi from "../../hooks/useApi";
import UserContext from "../../contexts/UserContext";
import ActivitiesContext from "../../contexts/ActivitiesContext";

export default function SubscribeButton({
  availableCapacity,
  subscribed,
  setIsSubscribed,
  activityId,
  startAt,
  dateId
}) {
  const api = useApi();
  const { userData } = useContext(UserContext);
  const { subscribedActivities } = useContext(ActivitiesContext);

  function checkTimeConflict() {
    const conflict = subscribedActivities.find(activity => (activity.dateId == dateId) && (activity.startAt == startAt));
    if(conflict) return console.log("vou mostrar o erro");
    registerUserInTheActivity();
  }

  function registerUserInTheActivity() {
    const userId = userData.user.id;
    const body = { userId, activityId };

    api.enrollment.postUserInscription(body)
      .then(response => {
        setIsSubscribed(true);
      }).catch(error => {
      /* eslint-disable-next-line no-console */
        console.error(error);
      });
  }

  if(subscribed) {
    return (
      <ButtonContainer>
        <button>
          <AiOutlineCheckCircle />
        </button>
        <span>Inscrito</span>
      </ButtonContainer>
    );
  }

  if (availableCapacity > 0) return (
    <ButtonContainer onClick={() => checkTimeConflict()}>
      <button>
        <RiLoginBoxLine />
      </button>
      <span>{availableCapacity} vagas</span>
    </ButtonContainer>

  );

  return (
    <ButtonContainer className="sold-out">
      <button>
        <AiOutlineCloseCircle />
      </button>
      <span>Esgotado</span>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  width: 25%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #078632;

  button {
    font-size: 28px;
    border: none;
    color: #078632;
    text-align: center;
    margin: 0;
    padding: 0;
    width: auto;
    background-color: transparent;
    cursor: pointer;
  }

  span {
    font-size: 10px;
    text-align: center;
  }

  &&.sold-out{
    color: #CC6666;

    button {
      color: #CC6666;
    }
  }
`;
