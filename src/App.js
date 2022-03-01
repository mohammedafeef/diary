import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import UserLayout from "./components/layouts/UserLayout";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import DashBoardLayout from "./components/layouts/DashBoardLayout";
import Home from "./components/pages/Home";
import AddDiary from "./components/pages/AddDiary";
import Diary from "./components/pages/Diary";
import { LoadingProvider } from "./context/loadingContext";
import { storageKey } from "./const";

export default function App() {
  const token = localStorage.getItem(storageKey.token);
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="app" element={<DashBoardLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="diary">
                <Route path="add" element={<AddDiary />} />
                <Route path=":id" element={<Diary />} />
              </Route>
            </Route>
            <Route path="user" element={<UserLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route
              path="/"
              element={<Navigate to={token ? "/app/home" : "/user/login"} />}
            />
          </Routes>
        </Router>
      </LoadingProvider>
    </ThemeProvider>
  );
}
