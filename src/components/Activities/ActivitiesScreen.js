import { useContext } from "react";
import EventInfoContext from "../../contexts/EventInfoContext";

export default function ActivitiesScreen() {
  const { dateEvents } = useContext(EventInfoContext);
  return (
    <>
      {dateEvents.map((a, i) => <p key={i}>{a.name}</p>)}
    </>
  );
}
