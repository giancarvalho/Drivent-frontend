import { useState, useEffect } from "react";
import styled from "styled-components";
import useApi from "../../../hooks/useApi";

export default function Hotel() {
  const api = useApi();
  const [enrollInfo, setEnrollInfo] = useState(null);

  useEffect(() => {
    api.enrollment.getPersonalInformations().then(response => {
      if(response.data.payentConfirmed) {
        if(response.data.hasHotel) {
          setEnrollInfo("showHotels");
        } else {
          setEnrollInfo("noHotel");
        }
      } else {
        setEnrollInfo("notPaid");
      }
    }).catch(error => {
      /* eslint-disable-next-line no-console */
      console.error(error);
    });
  }, []);

  if (enrollInfo !== null) {
    if (enrollInfo === "notPaid") {
      return (
        <BanMessage>
          <h1>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem.</h1>
        </BanMessage>
      );
    } else if (enrollInfo === "noHotel") {
      return (
        <BanMessage>
          <h1>Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades.</h1>
        </BanMessage>
      );
    } else {
      return (
        <h1>componente do Leo</h1>
      );
    }
  } else {
    return "";
  }
}

const BanMessage = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  color: #8E8E8E;

  h1{
    text-align: center;
  }
`;
