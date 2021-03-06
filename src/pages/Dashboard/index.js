import { useContext, useState } from "react";
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom";
import styled from "styled-components";

import EventInfoContext from "../../contexts/EventInfoContext";

import NavigationBar from "../../components/Dashboard/NavigationBar";

import DashboardLayout from "../../layouts/Dashboard";
import FillSubscription from "./FillSubscription";
import Payment from "./Payment";
import Hotel from "./Hotel";
import Activities from "./Activities";
import Certificate from "./Certificate";
import DoneScreen from "../../components/HotelScreen/DoneScreen";

export default function Dashboard() {
  const { eventInfo } = useContext(EventInfoContext);
  const match = useRouteMatch();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [changing, setChanging] = useState(false);

  return (
    <DashboardLayout background={eventInfo.backgroundImage}>
      <NavigationBar />

      <Container>
        <Switch>
          <Route path={`${match.path}/subscription`} exact>
            <FillSubscription />
          </Route>

          <Route path={`${match.path}/payment`} exact>
            <Payment />
          </Route>

          <Route path={`${match.path}/hotel`} exact>
            <Hotel
              hotelToTrack={[selectedHotel, setSelectedHotel]}
              roomToTrack={[selectedRoom, setSelectedRoom]}
              isOnChange={[changing, setChanging]}
            />
          </Route>

          <Route path={`${match.path}/hotel/done`} exact>
            <DoneScreen
              hotelToTrack={[selectedHotel, setSelectedHotel]}
              roomToTrack={[selectedRoom, setSelectedRoom]}
              isOnChange={[changing, setChanging]}
            />
          </Route>

          <Route path={`${match.path}/activities`} exact>
            <Activities />
          </Route>

          <Route path={`${match.path}/certificate`} exact>
            <Certificate />
          </Route>

          <Route path={`${match.path}/`}>
            <Redirect to={`${match.url}/subscription`} />
          </Route>
        </Switch>
      </Container>
    </DashboardLayout>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
