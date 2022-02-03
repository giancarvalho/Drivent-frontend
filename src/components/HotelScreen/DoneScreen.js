import { Title, SessionTitle } from "../_shared/Texts";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi.js";
import HotelResume from "./HotelResume";
import { useHistory } from "react-router-dom";

export default function DoneScreen({ isOnChange, hotelToTrack, roomToTrack }) {
  const api = useApi();

  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({});
  const [reservedRoom, setReservedRoom] = useState(null);
  const history = useHistory();

  useEffect(() => {
    let _personalInfo = {};
    let _hotels = {};
    let _rooms = {};
    Promise.all([
      api.enrollment.getPersonalInformations().then(res => {
        _personalInfo = res.data;
      }),
      api.hotel.getHotelsInfo().then(res => {
        _hotels = res.data;
      }),
      api.room.getRoomsInfo().then(res => {
        _rooms = res.data;
      }),
    ]).then(() => {
      setPersonalInfo(_personalInfo);
      setHotels(_hotels);
      setRooms(_rooms);
      setReservedRoom(_rooms.find(room => room.id === _personalInfo.roomId));
    });
  }, []);

  return (
    <Container>
      {
        reservedRoom ?
          <>
            <Title>Escolha de hotel e quarto</Title>
            <SessionTitle>Você já escolheu seu quarto:</SessionTitle>
            <HotelResume
              hotelInfo={hotels.find(hotel => hotel.id === reservedRoom.hotelId)}
              number={reservedRoom.number}
              maximumCapacity={reservedRoom.maximumCapacity}
              availableCapacity={reservedRoom.availableCapacity}
            />
            <ReserveButton onClick={() => {
              const [changing, setChanging] = isOnChange;
              const [selectedHotel, setSelectedHotel] = hotelToTrack;
              const [selectedRoom, setSelectedRoom] = roomToTrack;
              setChanging(true);
              setSelectedRoom(reservedRoom.number);
              setSelectedHotel(reservedRoom.hotelId);
              history.push("/dashboard/hotel");
            }
            }
            >TROCAR DE QUARTO</ReserveButton>
          </> : <></>
      }
    </Container>
  );
}

const Container = styled.div`
`;

const CardsWrapper = styled.div`
  display: flex;
`;

const WrapperRooms = styled.div`
  display: flex;

`;

const PaddingSubTitle = styled.div`
  padding-top: 51px;
  padding-bottom: 32px;
`;

const ReserveButton = styled.button`
  margin-top: 46px;
  width: 182px;
  height: 37px;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-bottom: 100px;
  border-width: 0px;
`;
