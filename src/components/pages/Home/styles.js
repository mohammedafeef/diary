import {
  Box,
  styled,
  InputBase,
  alpha,
  Typography,
  Card,
  Paper,
} from "@mui/material";
export const SearchWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "Right",
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const DiaryWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  padding: `${theme.spacing(3)} ${theme.spacing(1)} 0`,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  },
}));
//Diary Card style

export const DiaryCardWrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  borderRadius: "15px",
  width: `calc(20% - ${theme.spacing(2)})`,
  margin: `${theme.spacing(1)} ${theme.spacing(1)}`,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const DiaryTitle = styled(Typography)(() => ({}));
export const DiaryDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
}));
export const DiaryContent = styled(Typography)(() => ({}));
