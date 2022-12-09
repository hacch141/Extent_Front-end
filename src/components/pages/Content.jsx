import React from "react";
import styled from "styled-components";
import thumbnail1 from "assets/thumbnail1.png";
import thumbnail2 from "assets/thumbnail2.png";
import thumbnail3 from "assets/thumbnail3.png";
import thumbnail4 from "assets/thumbnail4.png";
import thumbnail5 from "assets/thumbnail5.png";
import signal from "assets/signal.png";
import { TiEye } from "react-icons/ti"

export default function Content() {
  const videoContent = [
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
      topic: "You should not use web2..",
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
      topic: "You should not use Web2..",
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
      topic: "You should not use web2..",
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
      topic: "You should not use web2..",
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
        <div className="header-div">
          <h6 className="video">Video</h6>
          <h6 className="date">Date</h6>
          <h6 className="views">Views</h6>
          <h6 className="comments">Comments</h6>
          <h6 className="likes">Likes</h6>
          <h6 className="preview">Previw</h6>
        </div>
        <div className="active">
          {videoContent.map((data, index) => {
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
                <h4 className="date-div">{data.date}</h4>
                <h4 className="views-div">{data.views}</h4>
                <h4 className="comments-div">{data.comments}</h4>
                <h4 className="likes-div">{data.likes}</h4>
                <h4 className="preview-div"> <TiEye style={{color: "green", size:"30px"}} /> {data.preview}</h4>
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
    cursor: pointer;

    img {
      size: 1rem;
      height: 1rem;
    }
  }

  .main-div {
    box-shadow: inset 0px 3px 20px rgba(200, 200, 200, 0.25);
    border-radius: 10px;
    padding: 1rem;
    color: white;
    .title-container {
      width: 100%;
      margin-bottom: 33px;
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
          cursor: pointer;
        }
      }
    }
    .header-div {
      font-size: 14px;
      line-height: 16px;
      color: #646464;
      display: flex;
      align-items: center;
      text-align: left;
      width: 100%;
      .video {
        width: 40%;
      }
      .date {
        width: 14.3%;
      }
      .views {
        width: 9.3%;
      }
      .comments {
        width: 11.8%;
      }
      .likes {
        width: 10.7%;
      }
      .preview {

      }
    }
    .active {
      max-height: 35.3rem;
      overflow: auto;
      display: flex;
      flex-direction: column;
      padding-right: 1.5rem;
      margin: 0.3rem 0;
      gap:0.3rem;
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
        font-size: 18px;
        line-height: 25px;
        color: #E0E0E0;
        border-top: 0.1rem solid #242424;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        h4 {
          font-weight: 100;
          font-size: 16px;
        }
        .video-duration-div {
          width: 6%;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          cursor: pointer;
          img {
            height: 3.5rem;
            size: 1rem;
            border-radius: 0.5rem;
          }
          h6 {
            color: #9F9F9F;
            font-weight: 100;
            font-size: 12px;
            line-height: 19px;
            text-align: right;
          }
        }
        .topic-subtopic-div {
          width: 25%;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          text-align: left;
          h4 {
            cursor: pointer;
            font-weight: 700;
            line-height: 25px;
            font-size: 18px;
          }
          h6 {
            color: #E0E0E0;
            font-style: normal;
            font-weight: 100;
            font-size: 12px;
            line-height: 19px;
          }
        }
        .date-div {
          width: 10%;
        }
        .views-div {
          width: 6%;
        }
        .comments-div {
          width: 6%;
        }
        .likes-div {
          width: 6%;
        }
        .preview-div {
          cursor: pointer;
          width: 10%;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .content {
      width: 128%;
      margin-left: -14%;  
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    .main-div {
      width: 128%;
      margin-left: -14%;
      .title-container {
        .title {
          display: flex;
          flex-direction: column;
          h4 {
            font-size: 0.8rem;
            margin-bottom: 0.2rem;
            cursor: pointer;
          }
        }
      }
      .header-div {
        font-size: 14px;
        line-height: 16px;
        color: #646464;
        display: flex;
        align-items: center;
        text-align: left;
        width: 100%;
        .video {
          width: 68%;
        }
        .date {
          display: none;
        }
        .views {
          width: 13%;
        }
        .comments {
          display: none;
        }
        .likes {
          width: 10.7%;
        }
        .preview {
          display: none;
        }
      }
      .active {
        .video-data {
          padding: 0.5rem;
          h4 {
            font-weight: 100;
            font-size: 11px;
          }
          .video-duration-div {
            width: 22%;
            margin-left: -5%;
            display: flex;
            flex-direction: column;
            gap: 0.1rem;
            cursor: pointer;
            img {
              height: 3rem;
              size: 1rem;
              border-radius: 0.5rem;
            }
            h6 {
              font-size: 9px;
            }
          }
          .topic-subtopic-div {
            width: 45%;
            display: flex;
            flex-direction: column;
            gap: 0.1rem;
            text-align: left;
            h4 {
              font-size: 12px;
            }
            h6 {
              display: none;
            }
          }
          .date-div {
            display: none;
          }
          .views-div {
            width: 6%;
          }
          .comments-div {
            display: none;
          }
          .likes-div {
            width: 6%;
          }
          .preview-div {
            display: none;
          }
        }
      }
    }
  }
`;