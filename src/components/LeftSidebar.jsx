import React from "react";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { SiSimpleanalytics } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import logo from "assets/logo.png"
import extent from "assets/Extent.png"
import photo from "assets/photo.png"
import video from "assets/video.png"
import music from "assets/music.png"
import plusicon from "assets/plusicon.png"
import { useState } from "react";

function LeftSidebar() {

  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState(btnState => !btnState);
  }

  let toggleClassOptions = btnState ? ' activeOptions': '';
  let toggleClassPlus = btnState ? 'activePlus' : '';

  return (
    <Aside id="sidebar"> 
      <div className="first-div">
        <div className="brand">
          <img src={logo} alt="logo" />
          <img src={extent} alt="extent" />
        </div>
        <ul className="pages">
          <li> 
            <MdDashboard />
            <h3>Dashboard</h3>
          </li>
          <li>
            <BiBookContent />
            <h3>Content</h3>
          </li>
          <li>
            <BiBookContent />
            <h3>Drafts</h3>
          </li>
          <li>
            <SiSimpleanalytics /> 
            <h3>Analytics</h3>
          </li>
          <li>
            <FaUserAlt /> 
            <h3>Profile</h3>
          </li>
        </ul>
      </div>
      <div className="second-div">
        <div className="plus">
          <div className={`options${toggleClassOptions}`}>
            <img src={photo} alt="photo" />
            <img src={music} alt="music" />
            <img src={video} alt="video" />
          </div>
          <div className="plusicon">
            <button onClick={handleClick}><img className={`${toggleClassPlus}`} src={plusicon} alt="plusicon" /></button>
          </div>
        </div>
      </div>
    </Aside>
  );
}

const Aside = styled.aside`
  background-color: var(--dark-background-color);
  box-shadow: inset 0px 0px 9px rgba(200, 200, 200, 0.25);
  height: 950px;
  border-radius: 10px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  .first-div {
    display: flex;
    flex-direction: column;
    row-gap: 100px;
    .brand {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      img {
        cursor: pointer;
      }
    }
    .pages {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      list-style-type: none;
      li {
        padding: 0.5rem;
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 0.5rem;
        h3{
          cursor: pointer;
          color: white;
        }
        svg {
          cursor: pointer;
          color: white;
          font-size: 1.2rem;
        }
      }
    }
  }
  .second-div {
    .plus {
      display: flex;
      flex-direction: column;
      .options {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        padding-left: 0.2rem;
        img {
          height: 2.2rem;
          width: 2.2rem;
          margin: 0.8rem;
          size: 1rem;
          border-radius: 0.5rem;
          opacity: 0;
          transition: all 1s ease-in-out;
        }
      }
      .activeOptions { 
        img {
          opacity:1;
          cursor: pointer;
          transition: all 1.65s ease-in-out;
          transform: rotate(360deg);
        }
      }
      .plusicon {
        button {
        background: #000000;
        box-shadow: inset 0px 4px 20px rgba(170, 170, 170, 0.25);
        border-radius: 100px;
        border: black;
        cursor: pointer;
        height: 65px;
        width: 65px;
        img {
          size: 1rem;
          height: 2.1rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 100%;
    height: 950px;
  }
`;

export default LeftSidebar;