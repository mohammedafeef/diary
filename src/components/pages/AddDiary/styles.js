import { styled, TextField } from "@mui/material";

export const ConfigWrapper = styled("div")(() => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const SubjectInput = styled(TextField)(() => ({}));
