import React from "react";
import {
  DiaryCardWrapper,
  DiaryTitle,
  DiaryContent,
  DiaryDate,
  CardLink
} from "./styles";

export default function DiaryCard({ diary }) {
  const { date, subject, content, _id } = diary;
  return (
    <CardLink to={`/app/diary/${_id}`}>
      <DiaryCardWrapper variant="outlined">
        <DiaryTitle variant="h5">{subject}</DiaryTitle>
        <DiaryDate variant="subtitle2">{date}</DiaryDate>
        <DiaryContent
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </DiaryCardWrapper>
    </CardLink>
  );
}
