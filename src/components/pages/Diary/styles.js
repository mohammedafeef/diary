import { styled, Typography } from "@mui/material";

export const DiaryWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  },
}));

export const Subject = styled(Typography)(() => ({}));
export const DiaryDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
}));
export const Content = styled(Typography)(() => ({}));
