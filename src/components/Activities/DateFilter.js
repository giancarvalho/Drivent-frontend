import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useApi from "../../hooks/useApi";
import { SessionTitle } from "../_shared/Texts";
import DateButton from "./DateButton";

export default function DateFilter({ filtering, setFiltering }) {
  const { event } = useApi();
  const [dates, setDates] = useState([]);

  useEffect(() => {
    event
      .getEventList()
      .then((answer) => {
        setDates(answer.data);
      })
      .catch((answer) =>
        toast.error("Não foi possivel buscar atividades", {
          containerId: "error",
        })
      );
  }, []);

  return (
    <>
      {filtering ? (
        <></>
      ) : (
        <SessionTitle>Primeiro, filtre pelo dia do evento:</SessionTitle>
      )}

      {dates.map((d, i) => (
        <DateButton
          key={i}
          date={d.date}
          activities={d.activity}
          filtering={filtering}
          setFiltering={setFiltering}
        />
      ))}
    </>
  );
}
