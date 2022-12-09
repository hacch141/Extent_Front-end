import React from "react";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { SiSimpleanalytics } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { ImPlus } from "react-icons/im"; 
import logo from "assets/logo.png"
import extent from "assets/Extent.png"
import { BrowserRouter as Link} from "react-router-dom";
function LeftSidebar() {
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
            <Link to="/content"><h3>Dashboard</h3></Link>
          </li>
          <li>
            <BiBookContent />
            <Link to="/content"><h3>Content</h3></Link>
          </li>
          <li>
            <BiBookContent />
            <Link to="/content"><h3>Drafts</h3></Link>
          </li>
          <li>
            <SiSimpleanalytics /> 
            <Link to="/content"><h3>Analytics</h3></Link>
          </li>
          <li>
            <FaUserAlt /> 
            <Link to="/content"><h3>Profile</h3></Link>
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

export default LeftSidebar;
