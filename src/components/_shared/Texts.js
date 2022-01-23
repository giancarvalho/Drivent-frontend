import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

function Title({ children }) {
  return <StyledTypography variant="h4">{children}</StyledTypography>; 
}

function SessionTitle({ children }) {
  return <SessionTypography variant="h6">{children}</SessionTypography>; 
}

const StyledTypography = styled(Typography)`
margin-bottom: 20px!important;
`;

const SessionTypography = styled(Typography)`
  color: #8E8E8E;
  margin-bottom: 15px !important;
`;

const PreviousSectionNotCompleted = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: roboto;
  color: #8e8e8e;
  row-gap: 5px;
`;

export {
  Title,
  SessionTitle,
  PreviousSectionNotCompleted,
};
