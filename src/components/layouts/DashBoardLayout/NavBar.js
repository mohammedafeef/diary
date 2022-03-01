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
import { useLocation, matchPath, useNavigate } from "react-router-dom";
import { storageKey } from "../../../const";
export default function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = (path) =>
    path ? matchPath({ path, end: false }, pathname) : false;
  const logoutHandler = () => {
    localStorage.removeItem(storageKey.token);
    navigate("/user/login");
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
