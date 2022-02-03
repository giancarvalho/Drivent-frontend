import styled from "styled-components";

export default function HotelResume({ hotelInfo, number, maximumCapacity, availableCapacity }) {
  const {
    imageUrl,
    name,
    id,
    hasSingle,
    hasDouble,
    hasTriple
  } = hotelInfo;

  const types = {
    1: "Single",
    2: "Double",
    3: "Triple"
  };

  function constructMessage() {
    if (maximumCapacity - availableCapacity === 1) return "Apenas você";
    return `Você e mais ${maximumCapacity - availableCapacity - 1}`;
  }

  return (
    <ContainerCardHotel>
      <Image src={imageUrl} width={168} height={109} />
      <ContainerName>{name}</ContainerName>
      <ContainerSubdescription>Quarto reservado</ContainerSubdescription>
      <ContainerInfo>{`${number} (${types[maximumCapacity]})`}</ContainerInfo>
      <ContainerSubdescription>Pessoas no seu quarto</ContainerSubdescription>
      <ContainerInfo>{constructMessage()}</ContainerInfo>
    </ContainerCardHotel>
  );
}

const ContainerCardHotel = styled.div`
  width: 196px;
  height: 264px;
  background: #FFEED2;
  border-radius: 10px;
  margin-right: 19px;
  padding-top: 16px;
  padding-left: 14px;
  padding-right: 14px;
`;

const Image = styled.img`
border-radius: 5px;
`;

const ContainerName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #343434;
  margin-top: 10px;
`;

const ContainerSubdescription = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: #3C3C3C;
  margin-top: 10px;
`;

const ContainerInfo = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #3C3C3C;
  margin-top: 2px;
  margin-bottom: 4px;
`;
