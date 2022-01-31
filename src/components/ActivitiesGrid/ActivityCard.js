import { useContext } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import ActivityContext from "../../contexts/ActivitiesContext";
import SubscribedButton from "./SubscribeButton";

export default function ActivityCard({ activityData }) {
  const { name, startAt, endAt, availableCapacity } = activityData;
  const duration =
    dayjs(`2022-01-01 ${endAt}`).diff(`2022-01-01 ${startAt}`, "m") / 60;

  return (
    <CardContainer duration={duration} >
      <TextContainer>
        <h6>{name}</h6>
        <p>
          {startAt} - {endAt}
        </p>
      </TextContainer>
      <SubscribedButton availableCapacity={availableCapacity}  />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  height: ${({ duration }) =>
    duration >= 2 ? duration * 80 + (duration - 1) * 10 : duration * 80}px;
  width: 270px;
  background-color:${({ subscribed }) => subscribed ?  "#D0FFDB" : "#f1f1f1"} ;
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

