import React from "react";
import {
  SearchWrapper,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  DiaryWrapper,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import DiaryCard from "./DiaryCard";
export default function Home() {
  return (
    <>
      <SearchWrapper>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </SearchWrapper>
      <DiaryWrapper>
        <DiaryCard />
        <DiaryCard />
        <DiaryCard />
        <DiaryCard />
        <DiaryCard />
        <DiaryCard />

      </DiaryWrapper>
    </>
  );
}
