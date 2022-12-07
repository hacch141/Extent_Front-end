import React from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import avatar from "assets/Profile.png";
import metamaskImg from "assets/metamask.png";
export default function Avatar() {
  return (
    <Section>
      <div className="metamask-div">
        <img src={metamaskImg} alt="metamask" />
        <h6>0x0445.....3E0716</h6>
      </div>
      <div className="name">
        <div className="my-name">
          <h4>Harsh Chaudhari</h4>
          <span style={{color: "green"}}>@hacch141</span>
        </div>
        <div className="my-avtar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  color: white;
  display: flex;
  margin-left: 25%;
  margin-bottom: 110px;
  background-color: rgb(23, 23, 23);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  .metamask-div {
    background: #000000;
    box-shadow: inset 0px 4px 26px rgba(252, 252, 252, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 1rem;
    img {
      size: 1rem;
      height: 1.5rem;
    }
  }
  .name {
    display: flex;
    align-content: center;
    text-align: right;
    gap: 0.5rem;
    .my-name {  
      svg {
        color: var(--primary-color);
        font-size: 1.3rem;
      }
    }
    .my-avtar {
      background: #000000;
      box-shadow: inset 0px 4px 20px rgba(170, 170, 170, 0.25);
      border-radius: 100px;
      img {
        size: 1rem;
        height: 3rem;
      }
    }
  }
`;
