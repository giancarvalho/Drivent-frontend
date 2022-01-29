import { useState, useEffect } from "react";
import styled from "styled-components";
import ActivityBoard from "./ActivityBoard";

export default function ActivitiesGrid() {
  const [halls, setHalls] = useState(null);

  useEffect(() => {
    const auxHalls = {};
    for (const activity of mockActivities) {
      const hallId = activity.hall.id;

      if (!auxHalls[hallId]) {
        auxHalls[hallId] = {
          name: activity.hall.name,
          activities: [activity],
        };
      } else auxHalls[hallId].activities.push(activity);
    }

    setHalls(auxHalls);
  }, []);

  function FormGrid() {
    const HallIds = Object.keys(halls).sort();

    return HallIds.map((hallId, i) => (
      <ActivityBoard hallData={halls[hallId]} key={i} />
    ));
  }

  return <GridContainer>{halls && <FormGrid />}</GridContainer>;
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
  {
    id: 2,
    name: "Montando o PC ideal",
    startAt: "10:00",
    endAt: "11:00",
    maximumCapacity: 50,
    availableCapacity: 50,
    hallId: 2,
    dateId: 5,
    hall: {
      id: 3,
      name: "Salão Oval",
    },
  },
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
      id: 1,
      name: "Salão Oval",
    },
  },
  {
    id: 1,
    name: "Minecraft",
    startAt: "11:00",
    endAt: "12:00",
    maximumCapacity: 50,
    availableCapacity: 50,
    hallId: 1,
    dateId: 4,
    hall: {
      id: 2,
      name: "Salao B",
    },
  },
  {
    id: 1,
    name: "Minecraft",
    startAt: "09:00",
    endAt: "11:00",
    maximumCapacity: 50,
    availableCapacity: 50,
    hallId: 1,
    dateId: 4,
    hall: {
      id: 2,
      name: "Salao B",
    },
  },
];
