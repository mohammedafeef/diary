import { styled, Box, Toolbar, AppBar } from "@mui/material";

export const ContentWrapper = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(30,30,30)",
}));

//user layout styles
export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "10px",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "25%",
  minHeight: "30%",
}));

//app layout style
export const AppContainer = styled(AppBar)(() => ({
  minHeight: "5%",
  color: "white",
  background: "rgba(30,30,30)",
}));
export const CustomToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const Content = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  flex: "1",
  padding: theme.spacing(3),
  paddingBottom: 0,
  paddingTop: "calc(5% + 24px)",
  overflowX: "hidden",
  background: theme.palette.background.default,
  [theme.breakpoints.down("sm")]: {
    paddingTop: "calc(13% + 24px)",
  },
}));
