import React from "react";
import { ConfigWrapper, SubjectInput } from "./styles";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MUIRichTextEditor from "mui-rte";
import { convertToRaw } from "draft-js";

export default function AddDiary() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [subject, setSubject] = React.useState("");
  const [content, setContent] = React.useState("");
  const dateHandler = (date) => setSelectedDate(date);
  const subjectChangeHandler = (e) => setSubject(e.target.value);
  const onEditorChange = (event) => {
    const plainText = event.getCurrentContent().getPlainText(); // for plain text
    const rteContent = convertToRaw(event.getCurrentContent()); // for rte content with text formating
    rteContent && setContent(JSON.stringify(rteContent)); // store your rteContent to state
  };
  return (
    <>
      <ConfigWrapper>
        <SubjectInput value={subject} onChange={subjectChangeHandler} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Basic example"
            value={selectedDate}
            onChange={dateHandler}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </ConfigWrapper>
      <MUIRichTextEditor
        label="Your label"
        controls={[
          "title",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "undo",
          "redo",
          "quote",
        ]}
        value={content}
        onChange={onEditorChange}
      />
    </>
  );
}
