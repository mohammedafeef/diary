import React, { useEffect, useContext, useState } from "react";
import {
  SearchWrapper,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  DiaryWrapper,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import DiaryCard from "./DiaryCard";
import { getDiaries } from "../../../service/diaryService";
import loadingContext from "../../../context/loadingContext";
import { Alert, AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";
export default function Home() {
  const { loaderToggler } = useContext(loadingContext);
  const [diaries, setDiaries] = useState();
  const [searchText, setSearchText] = useState("");
  const [filteredDiaries, setFilteredDiaries] = useState();
  useEffect(() => {
    const getDiariesData = async () => {
      loaderToggler(true);
      try {
        const diariesData = await getDiaries();
        console.log(diariesData.dairy);
        setFilteredDiaries(diariesData.dairy);
        setDiaries(diariesData.dairy);
      } catch (err) {
        console.error(err.message);
      }
      loaderToggler(false);
    };
    getDiariesData();
  }, []);

  const searchHandler = (e) => {
    console.log("called");
    const searchText = e.target.value;
    setSearchText(searchText);
    setFilteredDiaries(
      searchText
        ? diaries.filter(
            (diary) =>
              diary.subject.toLowerCase().includes(searchText.toLowerCase()) ||
              diary.date.includes(searchText)
          )
        : diaries
    );
  };
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
            value={searchText}
            onChange={searchHandler}
          />
        </Search>
      </SearchWrapper>
      <DiaryWrapper>
        {diaries && !filteredDiaries?.length ? (
          <Alert severity="info" sx={{ flex: 1 }}>
            <AlertTitle>No diary found to list.</AlertTitle>
            Add new diary by clicking <Link to="/app/diary/add">Here</Link>
          </Alert>
        ) : (
          filteredDiaries?.map((diary) => <DiaryCard diary={diary} />)
        )}
      </DiaryWrapper>
    </>
  );
}
