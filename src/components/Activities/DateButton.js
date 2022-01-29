import Button from "../Form/Button";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import styled from "styled-components";
import { useContext, useState } from "react";
import EventInfoContext from "../../contexts/EventInfoContext";

export default function DateButton({ activities, date, filtering, setFiltering }) {
  const [ selected, setSelected ] = useState(false);
  const { setDateEvents } = useContext(EventInfoContext);
  
  date+="/"+dayjs().year();
  const eventDate = date.split("/").reverse().join("/");
  const day = dayjs(eventDate).locale("pt-br").format("dddd, DD/MM");
  
  function filterByDate() {
    if (!filtering && !selected) setDateEvents(activities);
    setFiltering(!filtering);
    setSelected( filtering ? false : !selected );
  }

  return (
    <ButtonWrapper selected={selected} >
      <Button disabled={filtering && !selected} onClick={filterByDate}>{day}</Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.span`
  button{
    margin-right: 17px;
    background: ${props => props.selected ? "#FFD37D" : "auto" };
    &:hover{
      background: ${props => props.selected ? "#FFD37D" : "auto" };
    }
  } 
`;
