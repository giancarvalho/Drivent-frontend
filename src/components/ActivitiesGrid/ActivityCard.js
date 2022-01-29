import { useContext } from "react";
import styled from "styled-components";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ActivityContext from "../../contexts/ActivitiesContext";

export default function ActivityCard({ activityData }) {
  const { name, startAt, endAt, availableCapacity } = activityData;
  const { working } = useContext(ActivityContext);

  return (
    <CardContainer>
      <TextContainer>
        <h6>{name}</h6>
        <p>
          {startAt} - {endAt}
        </p>
      </TextContainer>
      <ButtonContainer>
        <button>
          <RiLoginBoxLine />
        </button>
        <span>{availableCapacity} vagas</span>
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
  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  text-align: left;
  border-right: 1px solid #cfcfcf;
  width: 75%;
  height: 100%;
  font-size: 13px;

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
    cursor: pointer;
  }

  span {
    font-size: 10px;
    text-align: center;
  }
`;
