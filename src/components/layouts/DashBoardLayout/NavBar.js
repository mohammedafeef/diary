import React from "react";
import { CustomToolbar, AppContainer } from "../styles";
import { Typography, Button } from "@mui/material";
export default function NavBar() {
  const logoutHandler = () => {
    console.log("Logout successfully");
  };
  return (
    <AppContainer position="fixed">
      <CustomToolbar>
        <Typography variant="h6">Diary</Typography>
        <Button
          color="error"
          variant="contained"
          onClick={logoutHandler}
          size="small"
        >
          Logout
        </Button>
      </CustomToolbar>
    </AppContainer>
  );
}
