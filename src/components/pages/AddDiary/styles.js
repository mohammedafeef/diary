import { styled, TextField } from "@mui/material";

export const ConfigWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  marginBottom: "1rem",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const SubjectInput = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginRight: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "1.5rem",
  },
}));
export const EditorWrapper = styled("div")(() => ({
  display: "flex",
  width: "100%",
  minHeight: "40%",
  borderRadius: "8px",
  border: "0.5px solid rgba(240,240,240,.3)",
  padding: "10px",
  marginBottom: "15px",
}));
export const ButtonWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));
