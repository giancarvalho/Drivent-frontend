import styled from "styled-components";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function ActivityCard() {
  return (
    <CardContainer>
      <TextContainer>
        <h6>Minecraft: montando o PC ideal</h6>
        <p>09:00 - 10:00</p>
      </TextContainer>
      <ButtonContainer>
        <button>
          <RiLoginBoxLine />
        </button>
      </ButtonContainer>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  height: 80px;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  display: flex;
`;

const TextContainer = styled.div`
  text-align: left;
  border-right: 1px solid #cfcfcf;
  width: 80%;
  height: 100%;
  font-size: 14px;

  h6 {
    display: inline-block;
    font-weight: bold;
    color: #343434;
  }

  p {
    margin-top: 7px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    color: #6fcf49;
  }
`;
