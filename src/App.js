import React, { useEffect } from "react";
import Sidebar from "components/Sidebar";
import RightSidebar from "components/RightSidebar";
import styled from "styled-components";
export default function App() {
  return (
    <Div>
      <Sidebar />
      <RightSidebar />
    </Div>
  );
}

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  min-height: 100vh;
  height: max-content;
  }
`;
