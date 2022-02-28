import React from "react";
import {
  BrowserRouter as Router,
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

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="app" element={<DashBoardLayout />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="user" element={<UserLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/" element={<Navigate to="/user/login" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
