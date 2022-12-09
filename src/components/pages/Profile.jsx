import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

function Profile() {
  return (
    <Section>
      <div className="content">
        <h3>Profile</h3>
        <FaUserAlt />
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

export default Profile;