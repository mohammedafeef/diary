import React from "react";
import { Container, ContentWrapper } from "./styles";
import { Outlet } from "react-router-dom";
export default function UserLayout() {
  return (
    <ContentWrapper>
      <Container>
        <Outlet />
      </Container>
    </ContentWrapper>
  );
}
