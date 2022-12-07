import React from "react";
import styled from "styled-components";
import thumbnail1 from "assets/thumbnail1.png";
import thumbnail2 from "assets/thumbnail2.png";
import thumbnail3 from "assets/thumbnail3.png";
import thumbnail4 from "assets/thumbnail4.png";
import thumbnail5 from "assets/thumbnail5.png";
import signal from "assets/signal.png";
import { TiEye } from "react-icons/ti"
// import { HiOutlineSignal } from "react-icons/hi";

export default function ActiveListeners() {
  const countries = [
    {
      image: thumbnail1,
      duration: "1:15",
      topic: "Why web2 sucks?",
      subtopic: "Some important facts that matter.",
      date: "22 Jan 2022",
      views: 69,
      comments: 5,
      likes: 30,
      preview: "Preview"
    },
    {
      image: thumbnail2,
      duration: "1:05",
      topic: "You should not use W..",
      subtopic: "Some important facts that matter.",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 45,
      preview: "Preview"
    },
    {
      image: thumbnail3,
      duration: "1:25",
      topic: "Web2 is the worst...",
      subtopic: "Some important facts that matter.",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 23,
      preview: "Preview"
    },
    {
      image: thumbnail4,
      duration: "1:05",
      topic: "You still using Web2",
      subtopic: "Some important facts that matter.",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 25,
      preview: "Preview"
    },
    {
      image: thumbnail5,
      duration: "1:25",
      topic: "Web2 makes me sick",
      subtopic: "Some important facts that matter.",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 27,
      preview: "Preview"
    },
    {
      image: thumbnail1,
      duration: "1:15",
      topic: "Why web2 sucks?",
      subtopic: "Some important facts that matter.",
      date: "22 Jan 2022",
      views: 69,
      comments: 5,
      likes: 30,
      preview: "Preview"
    },
    {
      image: thumbnail2,
      duration: "1:05",
      topic: "You should not use W..",
      subtopic: "Some important facts that matter.",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 45,
      preview: "Preview"
    },
    {
      image: thumbnail3,
      duration: "1:25",
      topic: "Web2 is the worst...",
      subtopic: "Some important facts that matter.",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 23,
      preview: "Preview"
    },
    {
      image: thumbnail4,
      duration: "1:05",
      topic: "You still using Web2",
      subtopic: "Some important facts that matter.",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 25,
      preview: "Preview"
    },
    {
      image: thumbnail5,
      duration: "1:25",
      topic: "Web2 makes me sick",
      subtopic: "Some important facts that matter.",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 27,
      preview: "Preview"
    },
    {
      image: thumbnail1,
      duration: "1:15",
      topic: "Why web2 sucks?",
      subtopic: "Some important facts that matter.",
      date: "22 Jan 2022",
      views: 69,
      comments: 5,
      likes: 30,
      preview: "Preview"
    },
    {
      image: thumbnail2,
      duration: "1:05",
      topic: "You should not use W..",
      subtopic: "Some important facts that matter.",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 45,
      preview: "Preview"
    },
    {
      image: thumbnail3,
      duration: "1:25",
      topic: "Web2 is the worst...",
      subtopic: "Some important facts that matter.",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 23,
      preview: "Preview"
    },
    {
      image: thumbnail4,
      duration: "1:05",
      topic: "You still using Web2",
      subtopic: "Some important facts that matter.",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 25,
      preview: "Preview"
    },
    {
      image: thumbnail5,
      duration: "1:25",
      topic: "Web2 makes me sick",
      subtopic: "Some important facts that matter.",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 27,
      preview: "Preview"
    },
    {
      image: thumbnail1,
      duration: "1:15",
      topic: "Why web2 sucks?",
      subtopic: "Some important facts that matter.",
      date: "22 Jan 2022",
      views: 69,
      comments: 5,
      likes: 30,
      preview: "Preview"
    },
    {
      image: thumbnail2,
      duration: "1:05",
      topic: "You should not use W..",
      subtopic: "Some important facts that matter.",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 45,
      preview: "Preview"
    },
    {
      image: thumbnail3,
      duration: "1:25",
      topic: "Web2 is the worst...",
      subtopic: "Some important facts that matter.",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 23,
      preview: "Preview"
    },
    {
      image: thumbnail4,
      duration: "1:05",
      topic: "You still using Web2",
      subtopic: "Some important facts that matter.",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 25,
      preview: "Preview"
    },
    {
      image: thumbnail5,
      duration: "1:25",
      topic: "Web2 makes me sick",
      subtopic: "Some important facts that matter.",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 27,
      preview: "Preview"
    },
  ];
  const data = [
    {
      data: 3800,
    },
  ];
  return (
    <Section>
      <div className="content">
        <h3>Content</h3>
        <img src={signal} alt="signal" />
      </div>
      <div className="main-div">
        <div className="title-container">
          <div className="title">
            <h4 className="selected">Videos</h4>
            <h4>Music</h4>
            <h4>Pictures</h4>
          </div>
        </div>
        <div className="active">
          {countries.map((data, index) => {
            return (
              <div className="video-data" key={index}>
                <div className="video-duration-div">
                  <img src={data.image} alt={data.name} />
                  <h6>{data.duration}</h6>
                </div>
                <div className="topic-subtopic-div">
                  <h4>{data.topic}</h4>
                  <h6>{data.subtopic}</h6>
                </div>
                <h4>{data.date}</h4>
                <h4>{data.views}</h4>
                <h4>{data.comments}</h4>
                <h4>{data.likes}</h4>
                <h4> <TiEye style={{color: "green", size:"30px"}} /> {data.preview}</h4>
              </div>
            );
          })}
        </div>
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

    img {
      size: 1rem;
      height: 1rem;
    }
  }

  .main-div {
    background-color: var(--dark-background-color);
    border: 3px solid #000000;
    border-radius: 10px;
    padding: 1rem;
    color: white;
    .title-container {
      width: 100%;
      padding-top: 1rem;
      .title {
        color: #A3A3A3;
        width: 30%;
        font-weight: 50;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .selected {
          color: #F3F3F3;
          text-decoration: underline;
        }
        h4 {
          font-size: 0.8rem;
          margin-bottom: 0.2rem;
        }
        h1 {
          font-size: 1.5rem;
          letter-spacing: 0.2rem;
        }
      }
    }
    .active {
      max-height: 37rem;
      overflow: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-right: 1.5rem;
      margin: 1rem 0;
      ::-webkit-scrollbar {
        width: 4px;
        border-radius: 8px;
        &-thumb {
          background-color: #b8b8b8;
          background: #5C5C5C;
          border-radius: 8px;
        }
      }
      h5 {
        font-weight: 100;
      }
      .video-data {
        // font-family: 'Avenir';
        font-style: normal;
        font-weight: 100;
        font-size: 18px;
        line-height: 25px;
        color: #E0E0E0;
        border-bottom: 0.1rem solid #242424;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        .video-duration-div {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          img {
            height: 3.5rem;
            size: 1rem;
            border-radius: 0.5rem;
          }
          h6 {
            color: #9F9F9F;
            font-family: 'Avenir Next';
            font-style: normal;
            font-weight: 100;
            font-size: 14px;
            line-height: 19px;
            text-align: right;
          }
        }

        .topic-subtopic-div {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          text-align: left;
          h6 {
            color: #E0E0E0;
            font-family: 'Avenir Next';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
          }
        }
      }
    }
  }
`;