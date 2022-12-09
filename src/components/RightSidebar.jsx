import React from "react";
import styled from "styled-components";
import Analytics from "./pages/Analytics";
import Content from "./pages/Content";
import Dashboard from "./pages/Dashboard";
import Drafts from "./pages/Drafts";
import Profile from "./pages/Profile";
import ProfileHeader from "./ProfileHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function RightSidebar() {
  return (
    <Section id="rightSidebar">
      <ProfileHeader />
      <Router>
        <Routes>
          <Route path="/Extent_Front-end" element={<Content />} />
          <Route path="/Extent_Front-end/Analytics" element={<Analytics />} />
          <Route path="/Extent_Front-end/content" element={<Content />} />
          <Route path="/Extent_Front-end/Dashboard" element={<Dashboard />} />
          <Route path="/Extent_Front-end/Drafts" element={<Drafts />} />
          <Route path="/Extent_Front-end/Profile" element={<Profile />} />
        </Routes>
      </Router>
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