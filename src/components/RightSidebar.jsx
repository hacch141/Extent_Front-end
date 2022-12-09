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
          <Route path="/" element={<Content />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/content" element={<Content />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Drafts" element={<Drafts />} />
          <Route path="/Profile" element={<Profile />} />
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
