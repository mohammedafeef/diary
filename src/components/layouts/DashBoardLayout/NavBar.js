import React from "react";
import {
  CustomToolbar,
  AppContainer,
  Title,
  NavLink,
  NavButton,
  ButtonWrapper,
} from "../styles";
import { Button } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";
export default function NavBar() {
  const { pathname } = useLocation();
  const isActive = (path) =>
    path ? matchPath({ path, end: false }, pathname) : false;
  const logoutHandler = () => {
    console.log("Logout successfully");
  };
  return (
    <AppContainer position="fixed">
      <CustomToolbar>
        <NavLink to="/app/home">
          <Title variant="h6">Diary</Title>
        </NavLink>
        <ButtonWrapper>
          <NavLink to="/app/diary/add">
            <NavButton
              sx={{
                background: isActive("/app/diary/add")
                  ? "rgba(56, 142, 60, .8)"
                  : "rgba(56, 142, 60, 1)",
              }}
            >
              Add diary
            </NavButton>
          </NavLink>
          <Button
            color="error"
            variant="contained"
            onClick={logoutHandler}
            size="small"
          >
            Logout
          </Button>
        </ButtonWrapper>
      </CustomToolbar>
    </AppContainer>
  );
}
