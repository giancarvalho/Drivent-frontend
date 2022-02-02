import styled from "styled-components";
import { HiOutlineUser } from "react-icons/hi";

export default function CardRoom({ roomInfo, selectedRoom, setSelectedRoom, userRoomId, changing }) {
  function contructUserIcons() {
    const occupiedStyle = { fill: "black" };
    const selectedStyle = { fill: "#FF4791", color: "#FF4791" };

    const freeIcons = n => {
      if (n < 0) return <></>;
      return <>{[...Array(n)].map((a, i) => <HiOutlineUser key={i} />)}</>;
    };

    const selectedIcon = () => <HiOutlineUser style={selectedStyle} />;

    const occupiedIcons = n => {
      if (n < 0) return <></>;
      return <>{[...Array(n)].map((a, i) => <HiOutlineUser key={i} style={occupiedStyle} />)}</>;
    };

    const generateFromInfo = info => {
      return (
        <>
          {info.av ? freeIcons(info.av) : <></>}
          {info.selected ? selectedIcon() : <></>}
          {info.oc ? occupiedIcons(info.oc) : <></>}
        </>
      );
    };

    let info = {};
    const av = roomInfo.availableCapacity;
    const max = roomInfo.maximumCapacity;

    if (changing) {
      if (userRoomId && userRoomId === roomInfo.id) {
        if (selectedRoom === roomInfo.number) {
          info = {
            av,
            selected: true,
            oc: max - av - 1
          };
          // av : livre
          // 1 : selected
          // max - av - 1 : ocupado
        } else {
          info = {
            av: av + 1,
            oc: max - av - 1
          };
          // av + 1: livre
          // max - av - 1 : ocupado
        }
      } else {
        if (selectedRoom === roomInfo.number) {
          info = {
            av: av - 1,
            selected: true,
            oc: max - av
          };
          // av - 1 : livre
          // 1 : selected
          // max - av : ocupado
        } else {
          //if (av === 0) {
          //}
          info = {
            av: av,
            oc: max - av
          };
          // if (av === 0) {
          //   max : ocupado
          //   disabled
          // }
          // av : livre
          // max - av : ocupado
        }
      }
    } else {
      if (selectedRoom === roomInfo.number) {
        info = {
          av: av - 1,
          selected: true,
          oc: max - av
        };
        // av - 1 : livre
        // 1 : selected
        // max - av : ocupado
      } else {
        //if (av === 0) {
        //}
        info = {
          av: av,
          oc: max - av
        };
        // if (av === 0) {
        //   max : ocupado
        //   disabled
        // }
        // av : livre
        // max - av : ocupado
      }
    }

    return generateFromInfo(info);

    return <></>;
    /*
    if (userRoomId && userRoomId === roomInfo.id) {
      const occupiedSpaces = roomInfo.maximumCapacity - roomInfo.availableCapacity;
      const occupiedSpacesByotherUsers = Math.max(occupiedSpaces - 1, 0);
      if (selectedRoom === roomInfo.number) {
        return (
          <>
            {
              [...Array(roomInfo.availableCapacity)].map((a, i) => <HiOutlineUser key={i} />)
            }
            {<HiOutlineUser style={selectedStyle} />}
            {
              [...Array(occupiedSpacesByotherUsers)].map((a, i) => <HiOutlineUser key={i} style={occupiedStyle} />)
            }
          </>
        );
      } else {
        return (
          <>
            {
              [...Array(roomInfo.maximumCapacity - occupiedSpacesByotherUsers)].map((a, i) => <HiOutlineUser key={i} />)
            }
            {
              [...Array(occupiedSpacesByotherUsers)].map((a, i) => <HiOutlineUser key={i} style={occupiedStyle} />)
            }
          </>
        );
      }
    } else {
      if (selectedRoom === roomInfo.number) {
        const occupiedSpaces = roomInfo.maximumCapacity - roomInfo.availableCapacity;
        const unoccupiedSpaces = Math.max(roomInfo.availableCapacity - 1, 0);
  
        return (
          <>
            {
              [...Array(unoccupiedSpaces)].map((a, i) => <HiOutlineUser key={i} />)
            }
            {<HiOutlineUser style={selectedStyle} />}
            {
              [...Array(Math.max(occupiedSpaces - 1, 0))].map((a, i) => <HiOutlineUser key={i} style={occupiedStyle} />)
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
      
    }*/
  }

  function handleClick() {
    if (roomInfo.availableCapacity === 0 && !(changing && userRoomId === roomInfo.id)) return;
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
      full={roomInfo.availableCapacity === 0 && !(changing && userRoomId === roomInfo.id)}>
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
