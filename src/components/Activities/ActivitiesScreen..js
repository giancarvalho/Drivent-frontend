import { useEffect } from "react";
import { toast } from "react-toastify";
import useApi from "../../hooks/useApi";

export default function ActivitiesScreen() {
  const { event, } = useApi();

  useEffect(() => {
    event.getEventList()
      .then(answer => {
        // dar um jeito de modificar o objeto de resposta para filtrar as datas
      }).catch(answer => { console.log(answer.response.data); toast(answer.response.data); });
  }, []);

  return (
    <>
    mostrar atividades
    </>
  );
}
