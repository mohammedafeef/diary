import React from "react";
import { DiaryWrapper, Subject, DiaryDate, Content } from "./styles";
export default function Diary() {
  return (
    <DiaryWrapper>
      <Subject variant="h4">Marvelous day</Subject>
      <DiaryDate variant="h6">23/01/2020</DiaryDate>
      <Content
        dangerouslySetInnerHTML={{
          __html: "<p>Hi, <br> something <strong>went</strong> today",
        }}
        variant="h5"
      />
    </DiaryWrapper>
  );
}
