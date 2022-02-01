import styled from "styled-components";
import { SessionTitle } from "../../components/_shared/Texts";
import ActivityCard from "./ActivityCard";

export default function ActivityBoard({ hallData }) {
  const { name: hallName, activities } = hallData;

  function byStartTime(a, b) {
    return Number(a.startAt.split(":")[0]) - Number(b.startAt.split(":")[0]);
  }

  activities.sort(byStartTime);

  return (
    <BoardContainer>
      <SessionTitle>{hallName}</SessionTitle>
      <Board>
        {activities.map((activity, index) => (
          <ActivityCard activityData={activity} key={index} />
        ))}
      </Board>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Board = styled.ul`
  flex: 1 1 auto;
  padding: 8px;
  border: 1px solid #d7d7d7;
  display: flex;
  flex-direction: column;
`;
