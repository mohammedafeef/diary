import { styled, Box } from "@mui/material";

export const ContentWrapper = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(30,30,30)",
}));
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
