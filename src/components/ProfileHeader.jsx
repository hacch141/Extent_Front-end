import React from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import avatar from "assets/Profile.png";
import metamaskImg from "assets/metamask.png";

function ProfileHeader() {
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
  margin-top: 10px;
  margin-bottom: 88px;
  background-color: rgb(0, 0, 0);
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
    cursor:no-drop;
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
      margin-top: 18px;
      h4 {
        cursor: pointer;
      } 
      span {
        font-family: "Futura";
        cursor: pointer;
      }
    }
    .my-avtar {
      background: #000000;
      box-shadow: inset 0px 4px 20px rgba(170, 170, 170, 0.25);
      border-radius: 100px;
      cursor: pointer;
      height: 72px;
      width: 72px;
      img {
        size: 1rem;
        height: 2.7rem;
        margin-top: 12px;
        margin-right: 11px;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 10px;
    box-shadow: inset 0px 4px 26px rgba(252, 252, 252, 0.25);
    .name {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
      .my-name { 
        margin-top: 18px;
        h4 {
          cursor: pointer;
        } 
        span {
          font-family: "Futura";
          cursor: pointer;
        }
      }
      .my-avtar {
        margin-left: 25px;
        margin-top: 20px;
      }
  }
`;
export default ProfileHeader;