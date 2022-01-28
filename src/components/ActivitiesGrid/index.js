import styled from "styled-components";
import ActivityBoard from "./ActivityBoard";

export default function ActivitiesGrid() {
  return (
    <GridContainer>
      <ActivityBoard />
      <ActivityBoard />
      <ActivityBoard />
    </GridContainer>
  );
}

const GridContainer = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  font-family: Roboto;
`;

const mockActivities = [
  {
    id: 4,
    date: "28/01",
    activity: [
      {
        id: 1,
        name: "Minecraft",
        startAt: "09:00",
        endAt: "10:00",
        maximumCapacity: 50,
        availableCapacity: 50,
        hallId: 1,
        dateId: 4,
        hall: {
          id: 1,
          name: "Salão Principal",
        },
      },
    ],
  },
  {
    id: 5,
    date: "29/01",
    activity: [
      {
        id: 3,
        name: "Montando o PC ideal",
        startAt: "10:00",
        endAt: "11:00",
        maximumCapacity: 50,
        availableCapacity: 50,
        hallId: 2,
        dateId: 5,
        hall: {
          id: 2,
          name: "Salão Oval",
        },
      },
    ],
  },
  {
    id: 6,
    date: "30/01",
    activity: [],
  },
];
