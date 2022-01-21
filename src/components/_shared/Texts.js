import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

function Title({ children }) {
  return <StyledTypography variant="h4">{children}</StyledTypography>; 
}

function SessionTitle({ children }) {
  return <SessionTypography variant="h5">{children}</SessionTypography>; 
}

const StyledTypography = styled(Typography)`
margin-bottom: 20px!important;
`;

const SessionTypography = styled(Typography)`
  color: #8E8E8E;
  margin-bottom: 15px !important;
`;

export {
  Title,
  SessionTitle,

};
