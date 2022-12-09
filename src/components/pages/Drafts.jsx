import React from "react";
import styled from "styled-components";
import { BiBookContent } from "react-icons/bi";

function Drafts() {
  return (
    <Section>
      <div className="content">
        <h3>Drafts</h3>
        <BiBookContent />
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

export default Drafts;