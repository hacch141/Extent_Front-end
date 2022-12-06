import React from "react";
import styled from "styled-components";
import thumbnail1 from "assets/thumbnail1.png";
import thumbnail2 from "assets/thumbnail2.png";
import thumbnail3 from "assets/thumbnail3.png";
import thumbnail4 from "assets/thumbnail4.png";
import thumbnail5 from "assets/thumbnail5.png";
import { TiEye } from "react-icons/ti"
// import { HiOutlineSignal } from "react-icons/hi";

export default function ActiveListeners() {
  const countries = [
    {
      image: thumbnail1,
      topic: "Why web2 sucks?",
      date: "22 Jan 2022",
      views: 69,
      comments: 5,
      likes: 30,
      preview: "Preview"
    },
    {
      image: thumbnail2,
      topic: "You should not use Web2..",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 45,
      preview: "Preview"
    },
    {
      image: thumbnail3,
      topic: "Web2 is the worst...",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 23,
      preview: "Preview"
    },
    {
      image: thumbnail4,
      topic: "You still using Web2",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 25,
      preview: "Preview"
    },
    {
      image: thumbnail5,
      topic: "Web2 makes me sick",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 27,
      preview: "Preview"
    },
    {
      image: thumbnail1,
      topic: "Why web2 sucks?",
      date: "22 Jan 2022",
      views: 69,
      comments: 5,
      likes: 30,
      preview: "Preview"
    },
    {
      image: thumbnail2,
      topic: "You should not use Web2..",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 45,
      preview: "Preview"
    },
    {
      image: thumbnail3,
      topic: "Web2 is the worst...",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 23,
      preview: "Preview"
    },
    {
      image: thumbnail4,
      topic: "You still using Web2",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 25,
      preview: "Preview"
    },
    {
      image: thumbnail5,
      topic: "Web2 makes me sick",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 27,
      preview: "Preview"
    },
    {
      image: thumbnail1,
      topic: "Why web2 sucks?",
      date: "22 Jan 2022",
      views: 69,
      comments: 5,
      likes: 30,
      preview: "Preview"
    },
    {
      image: thumbnail2,
      topic: "You should not use Web2..",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 45,
      preview: "Preview"
    },
    {
      image: thumbnail3,
      topic: "Web2 is the worst...",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 23,
      preview: "Preview"
    },
    {
      image: thumbnail4,
      topic: "You still using Web2",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 25,
      preview: "Preview"
    },
    {
      image: thumbnail5,
      topic: "Web2 makes me sick",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 27,
      preview: "Preview"
    },
    {
      image: thumbnail1,
      topic: "Why web2 sucks?",
      date: "22 Jan 2022",
      views: 69,
      comments: 5,
      likes: 30,
      preview: "Preview"
    },
    {
      image: thumbnail2,
      topic: "You should not use Web2..",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 45,
      preview: "Preview"
    },
    {
      image: thumbnail3,
      topic: "Web2 is the worst...",
      date: "12 Jan 2022",
      views: 45,
      comments: 5,
      likes: 23,
      preview: "Preview"
    },
    {
      image: thumbnail4,
      topic: "You still using Web2",
      date: "16 Jan 2022",
      views: 56,
      comments: 5,
      likes: 25,
      preview: "Preview"
    },
    {
      image: thumbnail5,
      topic: "Web2 makes me sick",
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
        {/* <HiOutlineSignal /> */}
      </div>
      <div className="main-div">
        <div className="title-container">
          <div className="title">
            <h4>Videos</h4>
            <h4>Music</h4>
            <h4>Pictures</h4>
          </div>
        </div>
        <div className="active">
          {countries.map((data, index) => {
            return (
              <div className="video-data" key={index}>
                <img src={data.image} alt={data.name} />
                <h4>{data.topic}</h4>
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
    color: white;
    padding-bottom: 1rem;
  }

  .main-div {
    background-color: var(--dark-background-color);
    padding: 1rem;
    border-radius: 10px;
    color: white;
    .title-container {
      width: 100%;
      padding-top: 1rem;
      .title {
        width: 30%;
        font-weight: 50;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
      max-height: 30rem;
      overflow: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-right: 1.5rem;
      margin: 1rem 0;
      ::-webkit-scrollbar {
        width: 0.2rem;
        background-color: #6e6e6ec3;
        &-thumb {
          background-color: #b8b8b8;
        }
      }
      h5 {
        font-weight: 100;
      }
      .video-data {
        border-bottom: 0.1rem solid #242424;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem;
        img {
          height: 3.5rem;
          size: 1rem;
          border-radius: 0.5rem;
        }
      }
    }
  }
`;