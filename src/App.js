import React, { useEffect } from "react";
import LeftSidebar from "components/LeftSidebar";
import RightSidebar from "components/RightSidebar";
import styled from "styled-components";

export default function App() {
  return (
    <Div>
      <LeftSidebar />
      <RightSidebar />
    </Div>
  );
}

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  // min-height: 100vh;
  // height: max-content;
  }
`;
