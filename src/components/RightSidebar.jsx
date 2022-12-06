import React from "react";
import styled from "styled-components";
import ActiveListeners from "./ActiveListeners";
import Avatar from "./Avatar";
function RightSidebar() {
  return (
    <Section id="rightSidebar">
      <Avatar />
      <ActiveListeners />
    </Section>
  );
}

const Section = styled.section`
  height: 78%;
  width: 85%;
  padding: 0 3rem;
  padding-top: 2rem;
  margin-left: 100px;
`;
export default RightSidebar;
