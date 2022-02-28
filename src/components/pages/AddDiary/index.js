import React, { useState } from "react";
import {
  ConfigWrapper,
  SubjectInput,
  ButtonWrapper,
  EditorWrapper,
} from "./styles";
import { TextField, Button, ThemeProvider, createTheme } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MUIRichTextEditor from "mui-rte";
import { stateToHTML } from "draft-js-export-html";
import { formatDateObj } from "../../utils/dateTimeHelper";

export default function AddDiary() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const dateHandler = (date) => setSelectedDate(date);
  const subjectChangeHandler = (e) => setSubject(e.target.value);
  const onEditorChange = (event) => setContent(event);
  const defaultTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const submitHandler = () => {
    const data = {
      subject,
      date: formatDateObj(selectedDate),
      content: stateToHTML(content.getCurrentContent()),
    };
    console.log(data);
  };
  Object.assign(defaultTheme, {
    overrides: {
      MUIRichTextEditor: {
        root: {
          width: "100%",
          display: "flex",
        },
        container: {
          margin: "8px 0px 0px 0px",
          position: "relative",
          fontSize: "1rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        },
        placeHolder: {
          color: "#757575",
          outline: "none",
          position: "unset",
          flex: "1 1 auto",
        },
      },
    },
  });
  return (
    <>
      <ConfigWrapper>
        <SubjectInput
          value={subject}
          onChange={subjectChangeHandler}
          label="Title"
          fullWidth
          multiline
          rows={2}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date"
            value={selectedDate}
            onChange={dateHandler}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </ConfigWrapper>
      <EditorWrapper>
        <ThemeProvider theme={defaultTheme}>
          <MUIRichTextEditor
            label="Discribe your day..."
            controls={[
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "quote",
              "undo",
              "redo",
            ]}
            onChange={onEditorChange}
          />
        </ThemeProvider>
      </EditorWrapper>
      <ButtonWrapper>
        <Button
          variant="contained"
          color="success"
          disabled={!content || !selectedDate || !subject}
          onClick={submitHandler}
        >
          Add
        </Button>
      </ButtonWrapper>
    </>
  );
}
