import React from "react";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { SiSimpleanalytics } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import logo from "assets/logo.png"
import extent from "assets/Extent.png"
function Sidebar() {
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
            <h3>Dashborad</h3>
          </li>
          <li>
            <BiBookContent />
            <h3 className="selected">Content</h3>
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
        <div className="help">
          <ImPlus />
        </div>
      </div>
    </Aside>
  );
}

const Aside = styled.aside`
  background-color: var(--dark-background-color);
  // font-family: 'Avenir Next';
  height: 100%;
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
      svg {  
        font-size: 2.5rem;
      }
    }
    .pages {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      list-style-type: none;
      li {
        padding: 0.5rem;
        cursor: pointer;
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 0.5rem;
        h3{
          color: white;
        }
        svg {
          color: white;
          font-size: 1.2rem;
        }
      }
      .selected {
        
      }
    }
  }

  .second-div {
    .help {
        svg {
          transition: 0.5s ease-in-out;
          cursor: pointer;
          color: white;
      }
    }
  }
`;

export default Sidebar;
