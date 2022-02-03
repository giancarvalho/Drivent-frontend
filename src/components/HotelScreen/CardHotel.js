import styled from "styled-components";

export default function CardHotel({ hotelInfo, availability, selectedHotel, setSelectedHotel, setSelectedRoom }) {
  const {
    imageUrl,
    name,
    id,
    hasSingle,
    hasDouble,
    hasTriple
  } = hotelInfo;

  function contructMessage(hasSingle, hasDouble, hasTriple) {
    const options = {
      Single: hasSingle,
      Double: hasDouble,
      Triple: hasTriple
    };

    const availableOptions = Object.entries(options).filter(opt => opt[1]);
    const layouts = {
      1: opts => opts[0][0],
      2: opts => `${opts[0][0]} e ${opts[1][0]}`,
      3: opts => `${opts[0][0]}, ${opts[1][0]} e ${opts[2][0]}`
    };

    return layouts[availableOptions.length](availableOptions);
  }

  function handleOnClick() {
    setSelectedRoom(null);
    if (selectedHotel === id) {
      setSelectedHotel(null);
    } else {
      setSelectedHotel(id);
    }
  }

  return (
    <ContainerCardHotel selected={selectedHotel === id} onClick={handleOnClick}>
      <Image src={imageUrl} width={168} height={109} />
      <ContainerName>{name}</ContainerName>
      <ContainerSubdescription>Tipos de acomodação:</ContainerSubdescription>
      <ContainerInfo>{contructMessage(hasSingle, hasDouble, hasTriple)}</ContainerInfo>
      <ContainerSubdescription>Vagas disponíveis:</ContainerSubdescription>
      <ContainerInfo>{availability}</ContainerInfo>
    </ContainerCardHotel>
  );
}

const ContainerCardHotel = styled.div`
  width: 196px;
  height: 264px;
  background: ${p => p.selected ? "#FFEED2" : "#F1F1F1"};
  border-radius: 10px;
  margin-right: 19px;
  padding-top: 16px;
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
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
