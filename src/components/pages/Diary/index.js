import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DiaryWrapper, Subject, DiaryDate, Content } from "./styles";
import { getDiary } from "../../../service/diaryService";
import loadingContext from "../../../context/loadingContext";
export default function Diary() {
  const { loaderToggler } = useContext(loadingContext);
  const { id } = useParams();
  const [diary, setDiary] = useState();
  useEffect(() => {
    const getDiaryData = async () => {
      loaderToggler(true);
      try {
        const diary = await getDiary(id);
        console.log(diary.dairy);
        setDiary(diary.dairy);
      } catch (err) {
        console.error(err.message);
      }
      loaderToggler(false);
    };
    if (id) getDiaryData();
  }, [id]);
  return (
    <DiaryWrapper>
      {diary && (
        <>
          <Subject variant="h4">{diary.subject}</Subject>
          <DiaryDate variant="h6">{diary.date}</DiaryDate>
          <Content
            dangerouslySetInnerHTML={{
              __html: diary.content,
            }}
            variant="h5"
          />
        </>
      )}
    </DiaryWrapper>
  );
}
