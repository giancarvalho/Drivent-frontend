import styled from "styled-components";

export default function Option(props) {
  const { online, presential, withHotel, withoutHotel, ingressInfo, setIngressInfo } = props;
  const { isOnline, hasHotel } = ingressInfo;

  function handleClick(button) {
    switch (button) {
    case "presential":
      if (isOnline === null || isOnline === true) {
        setIngressInfo({ ...ingressInfo, isOnline: false, price: 250, hasHotel: null });
      } else {
        setIngressInfo({ ...ingressInfo, isOnline: null, price: 0, hasHotel: null });
      }
      break;
    
    case "online":
      if (isOnline === null || isOnline === false) {
        setIngressInfo({ ...ingressInfo, isOnline: true, price: 100, hasHotel: null });
      } else {
        setIngressInfo({ ...ingressInfo, isOnline: null, price: 0, hasHotel: null });
      }
      break;

    case "withoutHotel":
      if (hasHotel === null || hasHotel === true) {
        setIngressInfo({ ...ingressInfo, hasHotel: false, price: 250 });
      } else {
        setIngressInfo({ ...ingressInfo, hasHotel: null, });
      }
      break;
    
    case "withHotel":
      if (hasHotel === null || hasHotel === false) {
        setIngressInfo({ ...ingressInfo, hasHotel: true, price: 600 });
      } else {
        setIngressInfo({ ...ingressInfo, hasHotel: null, price: 250 });
      }
      break;

    default: break;
    }
  }

  return (
    <>
      {presential ? 
        <Opt selected={isOnline === false && presential} onClick={() => handleClick("presential")}>
          <p className="mode" >Presencial</p>
          <p className="price" >R$ 250</p>
        </Opt> : <></>
      }
      
      {online ?
        <Opt selected={isOnline && online} onClick={() => handleClick("online")}>
          <p className="mode" >Online</p>
          <p className="price" >R$ 100</p>
        </Opt> : <></>
      }

      {withoutHotel ? 
        <Opt selected={hasHotel === false && withoutHotel} onClick={() => handleClick("withoutHotel")}>
          <p className="mode" >Sem Hotel</p>
          <p className="price" >+ R$ 0</p>
        </Opt> : <></>
      }

      {withHotel ? 
        <Opt selected={hasHotel && withHotel} onClick={() => handleClick("withHotel")}>
          <p className="mode" >Com Hotel</p>
          <p className="price" >+ R$ 350</p>
        </Opt> : <></>
      }
    </>
  );
}

const Opt = styled.div`
  width: 145px;
  height: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${props => props.selected ? "0px" : "1px solid #cecece" };
  border-radius: 20px;
  row-gap: 5px;
  background: ${props => props.selected ? "#ffeed2" : "#fff" };
  cursor: pointer;

  .mode{
    color: #454545;
    font-size: 16px;
  }
  .price{
    color: #898989;
    font-size: 14px;
  }
  // must change font styles
`;
