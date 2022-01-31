import styled from "styled-components";
import { HiOutlineUser } from "react-icons/hi";

export default function CardRoom({ roomInfo, selectedRoom, setSelectedRoom }) {
  function contructUserIcons() {
    if (selectedRoom === roomInfo.number) {
      const occupiedSpaces = roomInfo.maximumCapacity - roomInfo.availableCapacity;
      const occupiedStyle = { fill: "black" };
      return (
        <>
          {
            [...Array(roomInfo.availableCapacity - 1)].map((a, i) => <HiOutlineUser key={i} />)
          }
          {<HiOutlineUser style={{ fill: "#FF4791", color: "#FF4791" }} />}
          {
            [...Array(occupiedSpaces)].map((a, i) => <HiOutlineUser key={i} style={occupiedStyle} />)
          }
        </>
      );
    } else if (roomInfo.availableCapacity === 0) {
      const occupiedStyle = { fill: "#8C8C8C" };
      return (
        <>
          {
            [...Array(roomInfo.maximumCapacity)].map((a, i) => <HiOutlineUser key={i} style={occupiedStyle} />)
          }
        </>
      );
    } else {
      const occupiedSpaces = roomInfo.maximumCapacity - roomInfo.availableCapacity;
      const occupiedStyle = { fill: "black" };
      return (
        <>
          {
            [...Array(roomInfo.availableCapacity)].map((a, i) => <HiOutlineUser key={i} />)
          }
          {
            [...Array(occupiedSpaces)].map((a, i) => <HiOutlineUser key={i} style={occupiedStyle} />)
          }
        </>
      );
    }
  }

  function handleClick() {
    if (roomInfo.availableCapacity === 0) return;
    if (selectedRoom === roomInfo.number) {
      setSelectedRoom(null);
    } else {
      setSelectedRoom(roomInfo.number);
    }
  }

  return (
    <ContainerRoom
      isSelected={selectedRoom === roomInfo.number}
      onClick={handleClick}
      full={roomInfo.availableCapacity === 0}>
      {
        roomInfo ? (
          <>
            <RoomNumber>{roomInfo.number}</RoomNumber>
            <Icons>{contructUserIcons()}</Icons>
          </>
        ) : ""
      }
    </ContainerRoom>
  );
}

const ContainerRoom = styled.div`
  width: 190px;
  height: 45px;
  border: 1px solid #CECECE;
  background-color: ${p => p.full ? "#E9E9E9" : p.isSelected ? "#FFEED2" : "white"};
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 14px;
  padding-right: 12px;
`;

const RoomNumber = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: #454545;
`;

const Icons = styled.div`
`;
