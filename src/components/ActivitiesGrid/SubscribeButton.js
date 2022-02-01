import { useContext } from "react";
import styled from "styled-components";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import useApi from "../../hooks/useApi";
import UserContext from "../../contexts/UserContext";

export default function SubscribeButton({ availableCapacity, subscribed, activityId }) {
  const api = useApi();
  const { userData } = useContext(UserContext);

  function registerUserInTheActivity() {
    const userId = userData.user.id;
    const body = { userId, activityId };
    //verificar se não tem conflito antes de mandar a requisição

    api.enrollment.postUserInscription(body)
      .then(response => {
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
    <ButtonContainer onClick={() => registerUserInTheActivity()}>
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
