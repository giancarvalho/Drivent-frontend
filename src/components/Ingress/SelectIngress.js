import { SessionTitle, } from "../_shared/Texts";
import Button from "../Form/Button";
import styled from "styled-components";
import Option from "./Option";

export default function SelectIngress({ ingressInfo, setIngressInfo, setHasIngress }) {
  const ingressMode = (
    <>
      <SessionTitle>Primeiro escolha sua modalidade de ingresso</SessionTitle>
      <OptionsWrapper>
        <Option presential={true} ingressInfo={ingressInfo} setIngressInfo={setIngressInfo} />
        <Option online={true} ingressInfo={ingressInfo} setIngressInfo={setIngressInfo} />
      </OptionsWrapper>
    </>
  );

  const accomodationMode = (
    <>
      <SessionTitle>Ótimo! Agora escolha sua modalidade de hospedagem</SessionTitle>
      <OptionsWrapper>
        <Option withoutHotel={true} ingressInfo={ingressInfo} setIngressInfo={setIngressInfo} />
        <Option withHotel={true} ingressInfo={ingressInfo} setIngressInfo={setIngressInfo} />
      </OptionsWrapper>
    </>
  );

  const confirmReservation = (
    <>
      <SessionTitle>Fechado! O Total ficou em <strong>R$ {ingressInfo.price}</strong>. Agora é só confirmar:</SessionTitle>
      <Button onClick={() => setHasIngress(true)}>RESERVAR INGRESSO</Button>
    </>
  );

  return (
    <>
      {ingressMode}
      {ingressInfo.isOnline === false ? accomodationMode : <></> }
      {ingressInfo.isOnline === true || ingressInfo.hasHotel !== null ? confirmReservation : <></> }
    </>
  );
};

const OptionsWrapper = styled.div`
  display: flex;
  column-gap: 24px;
  margin-bottom: 32px;
  font-family: roboto;
`;
