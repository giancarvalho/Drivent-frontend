import { Title, SessionTitle } from "../_shared/Texts";
import styled from "styled-components";
import CardHotel from "./CardHotel";
import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi.js";
import CardRoom from "./CardRoom";
import { toast } from "react-toastify";
import HotelResume from "./HotelResume";
import { useHistory } from "react-router-dom";

export default function HotelScreen({ hotelToTrack, roomToTrack, isOnChange }) {
  const api = useApi();
  const history = useHistory();
  const [hotels, setHotels] = useState([]);
  const [availability, setAvailability] = useState({});

  const [selectedHotel, setSelectedHotel] = hotelToTrack;
  const [selectedRoom, setSelectedRoom] = roomToTrack;

  const [rooms, setRooms] = useState([]);
  const [isChoosingRoom, setIsChoosingRoom] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    const [changing, setChanging] = isOnChange;
    if (!changing && (selectedHotel && selectedRoom)) {
      return history.push("/dashboard/hotel/done");
    }
    api.enrollment.getPersonalInformations().then(res => {
      setPersonalInfo(res.data);
      if (res.data.roomId) setIsChoosingRoom(true);
    });
    api.hotel.getHotelsInfo().then(res => {
      setHotels(res.data);
    });
    api.room.getRoomsInfo().then(res => {
      setRooms(res.data);
      setAvailability(checkAvailability(res.data));
    });
  }, []);

  function checkAvailability(rooms) {
    let hash = {};

    rooms.forEach(room => {
      if (hash[room.hotelId] === undefined) {
        hash[room.hotelId] = room.availableCapacity;
      } else {
        hash[room.hotelId] = hash[room.hotelId] + room.availableCapacity;
      }
    });

    return hash;
  }

  function handleReserve() {
    if (selectedHotel && selectedRoom) {
      const choosedRoom = rooms.filter(room => {
        return room.hotelId === selectedHotel && room.number === selectedRoom;
      })[0];

      const body = {
        cpf: personalInfo.cpf,
        userId: personalInfo.userId,
        hasHotel: personalInfo.hasHotel,
        payentConfirmed: personalInfo.payentConfirmed,
        roomId: choosedRoom.id
      };

      api.room.reserveRoom(body).then(res => {
        toast("Quarto reservado com sucesso!");
        const [changing, setChanging] = isOnChange;
        setChanging(false);
        history.push("/dashboard/hotel/done");
      });
    } else {
      toast("Selecione o hotel e o quarto para continuar.");
    }
  }

  function handleChangeRoom(_hotelId, _roomNumber) {
    return () => {
      setSelectedHotel(_hotelId);
      setSelectedRoom(_roomNumber);

      setIsChoosingRoom(true);
    };
  }

  return (
    <Container>
      <Title>Escolha de hotel e quarto</Title>
      <SessionTitle>Primeiro, escolha seu hotel</SessionTitle>
      <CardsWrapper>
        {
          hotels.map(hotelInfo => {
            return (
              <CardHotel
                key={hotelInfo.id}
                hotelInfo={hotelInfo}
                availability={availability[hotelInfo.id] || 0}
                selectedHotel={selectedHotel}
                setSelectedHotel={setSelectedHotel}
                setSelectedRoom={setSelectedRoom}
              />
            );
          }

          )
        }
      </CardsWrapper>
      {
        selectedHotel ? (
          <>
            <PaddingSubTitle>
              <SessionTitle>Ótima pedida! Agora escolha seu quarto:</SessionTitle>
            </PaddingSubTitle>
            <WrapperRooms>
              {
                rooms.filter(room => room.hotelId === selectedHotel).map((room, key) => {
                  return (
                    <CardRoom
                      key={key}
                      roomInfo={room}
                      selectedRoom={selectedRoom}
                      setSelectedRoom={setSelectedRoom}
                    />
                  );
                })
              }
            </WrapperRooms>
          </>
        ) : <></>
      }
      {
        selectedHotel && selectedRoom ? <ReserveButton onClick={handleReserve}>RESERVAR QUARTO</ReserveButton> : ""
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
