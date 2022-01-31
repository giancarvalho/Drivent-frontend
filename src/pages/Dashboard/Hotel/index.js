import { useState, useEffect } from "react";
import styled from "styled-components";
import useApi from "../../../hooks/useApi";
import HotelScreen from "../../../components/HotelScreen";

export default function Hotel({ hotelToTrack, roomToTrack, isOnChange }) {
  const api = useApi();
  const [enrollInfo, setEnrollInfo] = useState(null);

  useEffect(() => {
    api.enrollment.getPersonalInformations().then(response => {
      if (response.data.payentConfirmed) {
        if (response.data.hasHotel) {
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
        <Wrapper>
          <HotelScreen hotelToTrack={hotelToTrack} roomToTrack={roomToTrack} isOnChange={isOnChange} />
        </Wrapper>
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

const Wrapper = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
