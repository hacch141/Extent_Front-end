import React from "react";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";

function Dashboard() {
  return (
    <Section>
      <div className="content">
        <h3>Dashboard</h3>
        <MdDashboard />
      </div>
    </Section>
  );
}

const Section = styled.section`

  .content {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: white;
    padding-bottom: 1rem;
    cursor: pointer;
    }
  }
`;

export default Dashboard;