import styled from "styled-components";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

export default function SubscribeButton({ availableCapacity, subscribed }) {
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
    <ButtonContainer>
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
