import React from "react";
import styled from "styled-components";
import Content from "./Content";
import ProfileHeader from "./ProfileHeader";
function RightSidebar() {
  return (
    <Section id="rightSidebar">
      <ProfileHeader />
      <Content />
    </Section>
  );
}

const Section = styled.section`
  height: 100%;
  width: 100%;
  padding: 0 3rem;
  padding-top: 2rem;
`;
export default RightSidebar;
