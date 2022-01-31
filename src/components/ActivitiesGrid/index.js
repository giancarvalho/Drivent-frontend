import { useState, useEffect } from "react";
import styled from "styled-components";
import ActivityBoard from "./ActivityBoard";

export default function ActivitiesGrid({ activitiesData }) {
  const [halls, setHalls] = useState(null);

  useEffect(() => {
    const auxHalls = {};
    for (const activity of activitiesData) {
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
  margin-top: 70px;
`;

