import styled from "styled-components";
import { SessionTitle } from "../../components/_shared/Texts";
import ActivityCard from "./ActivityCard";

export default function ActivityBoard() {
  return (
    <BoardContainer>
      <SessionTitle>Auditorio Principal</SessionTitle>
      <Board>
        <ActivityCard />
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
