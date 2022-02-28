import React from "react";
import {
  DiaryCardWrapper,
  DiaryTitle,
  DiaryContent,
  DiaryDate,
} from "./styles";

export default function DiaryCard() {
  return (
    <DiaryCardWrapper variant="outlined">
      <DiaryTitle variant="h5">Marvelous day</DiaryTitle>
      <DiaryDate variant="subtitle2">23/10/2003</DiaryDate>
      <DiaryContent>
        Today is an fantastic day in my leif brought so much things to my leif
        tuday mei thru lube gona success...
      </DiaryContent>
    </DiaryCardWrapper>
  );
}
