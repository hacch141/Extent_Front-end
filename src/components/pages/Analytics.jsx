import React from "react";
import styled from "styled-components";
import { SiSimpleanalytics } from "react-icons/si";

function Analytics() {
  return (
    <Section>
      <div className="content">
        <h3>Analytics</h3>
        <SiSimpleanalytics />
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

export default Analytics;