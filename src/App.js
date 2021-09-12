import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/layout/HomePage";
import RoomsList from "./components/rooms/RoomsList";
import RoomsMap from "./components/rooms/RoomsMap";
import RoomDetail from "./components/rooms/RoomDetail";
import Settings from "./components/Settings";
import Footer from "./components/layout/Footer";
import ThemeContextProvider from "./contexts/ThemeContext";
import NewServiceScheme from "./components/services/schemes/NewServiceScheme";
import EditServiceScheme from "./components/services/schemes/EditServiceScheme";
import {
  homeRoute,
  settingsRoute,
  roomsListRoute,
  roomsMapRoute,
  roomDetailRoute,
  newServiceSchemeRoute,
  editServiceSchemeRoute,
  startRoute,
  loginRoute,
} from "./routes";
import FloorContextProvider from "./contexts/FloorContext";
import RoomContextProvider from "./contexts/RoomContext";
import SchemeContextProvider from "./contexts/SchemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import Menu from "./components/layout/Menu";
import LoginForm from "./components/auth/LoginForm"

const App = () => {

  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <FloorContextProvider>
          <RoomContextProvider>
            <SchemeContextProvider>
              <BrowserRouter>
                <Menu />
                <Switch>
                  <Route
                    exact
                    path={startRoute}
                    render={() => <Redirect to={loginRoute} />}
                  />
                  <Route path={homeRoute} component={HomePage} />
                  <Route path={roomsListRoute} component={RoomsList} />
                  <Route path={roomsMapRoute} component={RoomsMap} />
                  <Route path={roomDetailRoute} component={RoomDetail} />
                  <Route
                    path={newServiceSchemeRoute}
                    component={NewServiceScheme}
                  />
                  <Route
                    path={editServiceSchemeRoute}
                    component={EditServiceScheme}
                  />
                  <Route path={settingsRoute} component={Settings} />
                  <Route path={loginRoute} component={LoginForm} />
                </Switch>
                <Footer />
              </BrowserRouter>
            </SchemeContextProvider>
          </RoomContextProvider>
        </FloorContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};

export default App;
