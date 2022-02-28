import React from "react";
import { Outlet } from "react-router-dom";
import { ContentWrapper, Content } from "../styles";
import NavBar from "./NavBar";
export default function DashBoardLayout() {
  return (
    <ContentWrapper>
      <NavBar />
      <Content>
        <Outlet />
      </Content>
    </ContentWrapper>
  );
}
